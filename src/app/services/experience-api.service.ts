import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ExperienceEntry } from '../models/experience.model';

/**
 * API service for Experience endpoints on the profile-service.
 * All calls go through the API Gateway.
 */
@Injectable({ providedIn: 'root' })
export class ExperienceApiService {
  private readonly baseUrl = `${environment.apiGatewayUrl}/api/v1/experiences`;

  constructor(private readonly http: HttpClient) {}

  /** GET all experiences for the default profile. */
  getAll(): Observable<ExperienceEntry[]> {
    return this.http.get<ExperienceEntry[]>(this.baseUrl);
  }

  /** GET a single experience by its database id. */
  getById(id: number): Observable<ExperienceEntry> {
    return this.http.get<ExperienceEntry>(`${this.baseUrl}/${id}`);
  }
}
