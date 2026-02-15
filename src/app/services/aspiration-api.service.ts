import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Aspiration } from '../models/aspiration.model';

/**
 * API service for Aspiration endpoints on the profile-service.
 * All calls go through the API Gateway.
 */
@Injectable({ providedIn: 'root' })
export class AspirationApiService {
  private readonly baseUrl = `${environment.apiGatewayUrl}/api/v1/aspirations`;

  constructor(private readonly http: HttpClient) {}

  /** GET all aspirations for the default profile. */
  getAll(): Observable<Aspiration[]> {
    return this.http.get<Aspiration[]>(this.baseUrl);
  }

  /** GET a single aspiration by its database id. */
  getById(id: number): Observable<Aspiration> {
    return this.http.get<Aspiration>(`${this.baseUrl}/${id}`);
  }
}
