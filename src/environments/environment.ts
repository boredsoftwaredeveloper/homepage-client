/**
 * Environment configuration.
 *
 * The API Gateway URL is used for ALL backend calls — including auth.
 * The frontend never talks to Supabase directly.
 */
export const environment = {
  production: false,

  /** API Gateway base URL (no trailing slash) */
  apiGatewayUrl: 'http://localhost:8080',

  /** OAuth callback URL — the page Supabase redirects to after OAuth */
  oauthCallbackUrl: 'http://localhost:4200/auth/callback',
};
