import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FeedPost } from '../models/feed-post.model';

/**
 * API service for Feed (Regret Stream) endpoints on the stream-service.
 * All calls go through the API Gateway.
 */
@Injectable({ providedIn: 'root' })
export class FeedApiService {
  private readonly baseUrl = `${environment.apiGatewayUrl}/api/v1/feed`;

  constructor(private readonly http: HttpClient) {}

  /** GET all feed posts ordered by sort order. */
  getAll(): Observable<FeedPost[]> {
    return this.http.get<FeedPost[]>(this.baseUrl);
  }

  /** GET a single feed post by its database id. */
  getById(id: number): Observable<FeedPost> {
    return this.http.get<FeedPost>(`${this.baseUrl}/${id}`);
  }
}
