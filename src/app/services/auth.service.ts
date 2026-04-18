import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthResponse, OAuthUrlResponse } from '../models/auth.model';
import { firstValueFrom } from 'rxjs';

/**
 * Client-side auth service that proxies all authentication through the
 * API Gateway. The frontend **never** talks to Supabase directly.
 *
 * Tokens are stored in `localStorage` so they survive page refreshes.
 * A reactive `isLoggedIn` signal drives UI updates.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = `${environment.apiGatewayUrl}/auth`;

  private readonly _accessToken = signal<string | null>(
    localStorage.getItem('access_token')
  );
  private readonly _email = signal<string | null>(
    localStorage.getItem('auth_email')
  );

  /** Whether the user currently holds a token. */
  readonly isLoggedIn = computed(() => !!this._accessToken());

  /** The authenticated user's email (or null). */
  readonly email = computed(() => this._email());

  constructor(private readonly http: HttpClient) {}

  // ── Email / password ────────────────────────────────────────────

  /** Create a new account and store the returned tokens. */
  async signUp(email: string, password: string): Promise<void> {
    const res = await firstValueFrom(
      this.http.post<AuthResponse>(`${this.baseUrl}/signup`, { email, password })
    );
    this.storeTokens(res);
  }

  /** Log in with email & password and store the returned tokens. */
  async login(email: string, password: string): Promise<void> {
    const res = await firstValueFrom(
      this.http.post<AuthResponse>(`${this.baseUrl}/login`, { email, password })
    );
    this.storeTokens(res);
  }

  // ── OAuth ───────────────────────────────────────────────────────

  /**
   * Opens the OAuth provider's authorization page in a popup window.
   * After the user authenticates, Supabase redirects to our callback URL
   * where we extract the auth code and exchange it for tokens.
   */
  async loginWithOAuth(provider: 'google' | 'github'): Promise<void> {
    const redirectTo = environment.oauthCallbackUrl;
    const res = await firstValueFrom(
      this.http.get<OAuthUrlResponse>(
        `${this.baseUrl}/oauth/${provider}`,
        { params: { redirect_to: redirectTo } }
      )
    );

    // Open provider page in a centered popup
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;
    window.open(
      res.url,
      'oauth-popup',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  }

  /**
   * Called from the OAuth callback route to exchange the one-time code
   * for access + refresh tokens.
   */
  async handleOAuthCallback(code: string): Promise<void> {
    const res = await firstValueFrom(
      this.http.post<AuthResponse>(`${this.baseUrl}/callback`, null, {
        params: { code },
      })
    );
    this.storeTokens(res);
  }

  // ── Token management ────────────────────────────────────────────

  /** Refresh the access token using the stored refresh token. */
  async refresh(): Promise<void> {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      this.clearTokens();
      return;
    }
    try {
      const res = await firstValueFrom(
        this.http.post<AuthResponse>(`${this.baseUrl}/refresh`, {
          refreshToken,
        })
      );
      this.storeTokens(res);
    } catch {
      this.clearTokens();
    }
  }

  /** Log out — clears local tokens and invalidates the session server-side. */
  async logout(): Promise<void> {
    try {
      await firstValueFrom(this.http.post(`${this.baseUrl}/logout`, null));
    } finally {
      this.clearTokens();
    }
  }

  /** Returns the current access token (called by the HTTP interceptor). */
  getAccessToken(): string | null {
    return this._accessToken();
  }

  // ── Internals ───────────────────────────────────────────────────

  private storeTokens(res: AuthResponse): void {
    localStorage.setItem('access_token', res.access_token);
    localStorage.setItem('refresh_token', res.refresh_token);
    localStorage.setItem('auth_email', res.email);
    this._accessToken.set(res.access_token);
    this._email.set(res.email);
  }

  private clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('auth_email');
    this._accessToken.set(null);
    this._email.set(null);
  }
}
