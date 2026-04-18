import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * HTTP interceptor that attaches a Bearer token to **mutating** requests
 * (POST, PUT, DELETE). GET requests are left unauthenticated so that
 * anonymous visitors can still read the portfolio.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const method = req.method.toUpperCase();

  // Only attach token to write operations
  if (method === 'GET') {
    return next(req);
  }

  const auth = inject(AuthService);
  const token = auth.getAccessToken();

  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(cloned);
  }

  return next(req);
};
