/** Response shape from the API Gateway auth endpoints. */
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  email: string;
}

/** Shape returned by GET /auth/oauth/:provider. */
export interface OAuthUrlResponse {
  url: string;
}
