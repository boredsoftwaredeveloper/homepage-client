import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Achievement } from '../models/achievement.model';

/**
 * API service for Achievement endpoints on the profile-service.
 * All calls go through the API Gateway.
 */
@Injectable({ providedIn: 'root' })
export class AchievementApiService {
  private readonly baseUrl = `${environment.apiGatewayUrl}/api/v1/achievements`;

  constructor(private readonly http: HttpClient) {}

  /** GET all achievements for the default profile. */
  getAll(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.baseUrl);
  }

  /** GET a single achievement by its database id. */
  getById(id: number): Observable<Achievement> {
    return this.http.get<Achievement>(`${this.baseUrl}/${id}`);
  }
}
