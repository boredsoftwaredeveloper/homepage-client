import { Component, EventEmitter, Output } from '@angular/core';

interface ArchNode {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
  category: 'client' | 'edge' | 'infra' | 'service' | 'data' | 'observability';
}

interface ArchConnection {
  from: string;
  to: string;
  label: string;
  style: 'solid' | 'dashed';
}

@Component({
  selector: 'app-architecture-dialog',
  standalone: true,
  templateUrl: './architecture-dialog.component.html',
  styleUrl: './architecture-dialog.component.scss',
})
export class ArchitectureDialogComponent {
  @Output() closeDialog = new EventEmitter<void>();

  readonly nodes: ArchNode[] = [
    { id: 'fe', label: 'Angular 19 SPA', sublabel: 'Vercel', icon: 'language', category: 'client' },
    { id: 'gw', label: 'API Gateway', sublabel: 'Spring Cloud Gateway', icon: 'router', category: 'edge' },
    { id: 'eureka', label: 'Eureka Server', sublabel: 'Service Discovery', icon: 'hub', category: 'infra' },
    { id: 'config', label: 'Config Server', sublabel: 'Spring Cloud Config', icon: 'settings', category: 'infra' },
    { id: 'profile', label: 'Profile Service', sublabel: 'Portfolio Data API', icon: 'person', category: 'service' },
    { id: 'regret', label: 'Regret Stream', sublabel: 'Social Feed API', icon: 'dynamic_feed', category: 'service' },
    { id: 'supabase', label: 'PostgreSQL', sublabel: 'Supabase', icon: 'storage', category: 'data' },
    { id: 'redis', label: 'Redis', sublabel: 'Upstash (Cache)', icon: 'bolt', category: 'data' },
    { id: 'bigquery', label: 'BigQuery', sublabel: 'Analytics', icon: 'analytics', category: 'data' },
    { id: 'trace', label: 'Cloud Trace', sublabel: 'Distributed Tracing', icon: 'timeline', category: 'observability' },
  ];

  readonly connections: ArchConnection[] = [
    { from: 'fe', to: 'gw', label: 'HTTPS', style: 'solid' },
    { from: 'gw', to: 'profile', label: 'Route', style: 'solid' },
    { from: 'gw', to: 'regret', label: 'Route', style: 'solid' },
    { from: 'gw', to: 'eureka', label: 'Discover', style: 'dashed' },
    { from: 'profile', to: 'eureka', label: 'Register', style: 'dashed' },
    { from: 'regret', to: 'eureka', label: 'Register', style: 'dashed' },
    { from: 'profile', to: 'config', label: 'Config', style: 'dashed' },
    { from: 'regret', to: 'config', label: 'Config', style: 'dashed' },
    { from: 'profile', to: 'supabase', label: 'CRUD', style: 'solid' },
    { from: 'regret', to: 'supabase', label: 'CRUD', style: 'solid' },
    { from: 'profile', to: 'redis', label: 'Cache', style: 'solid' },
    { from: 'regret', to: 'redis', label: 'Cache', style: 'solid' },
    { from: 'profile', to: 'bigquery', label: 'Events', style: 'dashed' },
    { from: 'profile', to: 'trace', label: 'Spans', style: 'dashed' },
    { from: 'regret', to: 'trace', label: 'Spans', style: 'dashed' },
  ];

  readonly techStack = [
    { category: 'Backend', items: ['Java 21', 'Spring Boot 3.5', 'Spring Cloud (Eureka, Gateway, Config)'] },
    { category: 'Security', items: ['OAuth2 + JWT', 'Spring Security', 'CORS + Rate Limiting'] },
    { category: 'Data', items: ['Supabase PostgreSQL', 'Upstash Redis', 'Flyway Migrations'] },
    { category: 'Resilience', items: ['Resilience4j Circuit Breakers', 'Retry + Timeout Patterns', 'Redis Rate Limiting'] },
    { category: 'Observability', items: ['GCP Cloud Trace (Zipkin)', 'Micrometer Metrics', 'Structured JSON Logging'] },
    { category: 'Infra', items: ['GCP Cloud Run', 'Docker Multi-Stage', 'GitHub Actions CI/CD'] },
  ];

  readonly securityLayers = [
    'TLS Termination (HTTPS)',
    'CORS Policy',
    'Rate Limiting (Redis)',
    'JWT Validation (Gateway)',
    'Method-Level Auth (@PreAuthorize)',
    'Input Validation (Jakarta)',
    'Parameterized Queries (JPA)',
    'Row-Level Security (Supabase)',
  ];

  readonly apiEndpoints = [
    { method: 'GET', path: '/api/v1/profiles/homepage', desc: 'Aggregate portfolio data', auth: false },
    { method: 'GET', path: '/api/v1/profiles/{section}', desc: 'Individual section data', auth: false },
    { method: 'PUT', path: '/api/v1/profiles/{section}', desc: 'Update section', auth: true },
    { method: 'GET', path: '/api/v1/feed', desc: 'Paginated feed posts', auth: false },
    { method: 'POST', path: '/api/v1/feed', desc: 'Create feed post', auth: true },
  ];

  onClose(): void {
    this.closeDialog.emit();
  }

  downloadArchDoc(): void {
    const doc = this.generateArchDoc();
    const blob = new Blob([doc], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'boredsoftwaredeveloper-system-architecture.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  private generateArchDoc(): string {
    return `================================================================================
  SYSTEM ARCHITECTURE — boredsoftwaredeveloper.xyz
  Version: 1.0.0 | Date: 2026-02-15
================================================================================

OVERVIEW
--------
A deliberately over-engineered portfolio backend built as a learning project.
A simple portfolio decomposed into a full Spring Cloud microservice ecosystem
with service discovery, centralized config, API gateway, distributed tracing,
caching, analytics, and OAuth2 security — all on GCP Cloud Run's free tier.

SERVICES (5 Total)
------------------
1. Discovery Service    | Eureka Server           | Port 8761
2. Config Server        | Spring Cloud Config     | Port 8888
3. API Gateway          | Spring Cloud Gateway    | Port 8080
4. Profile Service      | Portfolio Data CRUD     | Port 8081
5. Regret Stream Svc    | Social Feed CRUD        | Port 8082

TECHNOLOGY STACK
----------------
• Language:       Java 21 (LTS)
• Framework:      Spring Boot 3.5 + Spring Cloud 2024.x
• Gateway:        Spring Cloud Gateway (Reactive)
• Discovery:      Netflix Eureka
• Config:         Spring Cloud Config (Git + GCP Secret Manager)
• Security:       OAuth2 (Google/GitHub) + JWT, Spring Security
• Resilience:     Resilience4j (Circuit Breaker, Retry, Rate Limiter)
• ORM:            Spring Data JPA + Hibernate
• Migrations:     Flyway
• Mapping:        MapStruct 1.5.5
• API Docs:       springdoc-openapi (Swagger UI)
• Cache:          Spring Cache + Upstash Redis
• Tracing:        Micrometer + GCP Cloud Trace (Zipkin-compatible)
• Metrics:        Micrometer + GCP Cloud Monitoring
• Logging:        SLF4J + Logback (JSON structured)
• Build:          Gradle (Kotlin DSL)
• Container:      Docker (multi-stage, Eclipse Temurin 21)
• CI/CD:          GitHub Actions
• Compute:        GCP Cloud Run (serverless)

ARCHITECTURE FLOW
-----------------
Angular SPA (Vercel)
    │
    ▼ HTTPS
API Gateway (Spring Cloud Gateway)
    ├── JWT Auth (Google/GitHub OAuth2)
    ├── Rate Limiting (Redis-backed)
    ├── Circuit Breakers (Resilience4j)
    ├── CORS (boredsoftwaredeveloper.xyz)
    │
    ├──▶ Profile Service ──▶ Supabase PostgreSQL
    │       ├── Redis Cache
    │       ├── Cloud Trace
    │       └── BigQuery Analytics
    │
    └──▶ Regret Stream Service ──▶ Supabase PostgreSQL
            ├── Redis Cache
            ├── Cloud Trace
            └── BigQuery Analytics

Service Discovery: Eureka Server (all services register)
Config Management: Spring Cloud Config (Git-backed + Secret Manager)

SECURITY (8 Layers)
-------------------
1. TLS Termination (Cloud Run managed HTTPS)
2. CORS Policy (allow boredsoftwaredeveloper.xyz only)
3. Rate Limiting (100 req/min public, 30 req/min writes)
4. JWT Validation at Gateway (RS256 signature, expiry, issuer)
5. Method-Level Authorization (@PreAuthorize with ADMIN role)
6. Input Validation (Jakarta Bean Validation)
7. SQL Injection Prevention (JPA parameterized queries)
8. Database Row-Level Security (Supabase RLS)

AUTHORIZATION MATRIX
--------------------
Endpoint                    GET      POST     PUT      DELETE
/api/v1/profiles/**         Public   ADMIN    ADMIN    ADMIN
/api/v1/feed/**             Public   ADMIN    ADMIN    ADMIN
/auth/**                    Public   Public   —        —
/actuator/health            Public   —        —        —

API ENDPOINTS
-------------
Profile Service (Base: /api/v1/profiles)
  GET  /homepage            All sections aggregated
  GET  /hero                Hero section
  GET  /about               About section
  GET  /nav-links           Navigation links
  GET  /paper-trail         Certifications & docs
  GET  /experience          Work history
  GET  /achievements        Skills & accomplishments
  GET  /aspirations         Goals & learning targets
  GET  /footer              Footer content
  PUT  /hero                Update hero (ADMIN)
  POST /experience          Add experience (ADMIN)
  ...etc for all sections

Regret Stream Service (Base: /api/v1/feed)
  GET  /                    Paginated feed (page, size, sort)
  GET  /{id}                Single post detail
  POST /                    Create post (ADMIN)
  PUT  /{id}                Update post (ADMIN)
  DELETE /{id}              Delete post (ADMIN)
  GET  /hashtags            All hashtags
  GET  /?hashtag={tag}      Filter by hashtag

DATABASE SCHEMA
---------------
Supabase PostgreSQL (single instance, two schemas)

profile_schema:
  hero, about, nav_link, paper_trail, experience,
  achievement, aspiration, footer, footer_link

regret_stream_schema:
  feed_post, code_snippet, code_segment,
  image_content, hashtag, feed_post_hashtag

RESILIENCE PATTERNS
-------------------
• Circuit Breaker:  50% failure threshold, 30s open state, 3 half-open probes
• Retry:            3 attempts, 500ms backoff, on IOException/TimeoutException
• Rate Limiting:    Redis sliding window (100 req/min public, 30 req/min writes)
• Timeouts:         Gateway→Service 5s, Service→DB 3s, Service→Redis 1s

CACHING STRATEGY
----------------
• L1: Redis Rate Limit counters (Gateway)
• L2: Redis domain cache (Services) — 2-10 min TTL per entity
• L3: HTTP Cache-Control headers (Browser)
• Eviction: Cache-aside with write-through eviction on mutations

OBSERVABILITY
-------------
• Tracing:    GCP Cloud Trace (Zipkin API), W3C TraceContext propagation
• Metrics:    Micrometer → GCP Cloud Monitoring (JVM, HTTP, cache, DB, circuit breaker)
• Logging:    Structured JSON → GCP Cloud Logging (with traceId correlation)
• Analytics:  BigQuery streaming inserts (page views, API usage, logins)

HOSTING & COST
--------------
GCP Cloud Run (serverless):
  • Free tier: 2M requests/mo, 360K GB-sec
  • Estimated usage: ~50K requests/mo
  • Cost: $0/mo (within free tier)
  • Exception: Eureka min-instances:1 → ~$4/mo after free trial

External Services (all free tier):
  • Supabase:    500 MB DB, 1 GB bandwidth
  • Upstash:     10K commands/day, 256 MB
  • Vercel:      100 GB bandwidth (FE hosting)
  • BigQuery:    1 TB query/mo, 10 GB storage

Total: $0/mo (within free trial) → ~$4-5/mo after

CI/CD PIPELINE
--------------
GitHub Push → Lint → Unit Tests (JaCoCo ≥80%) → Dep Scan (Trivy)
  → Gradle Build → Docker Image → Artifact Registry
  → Deploy Staging → Smoke Tests → Deploy Production

================================================================================
  "Why is it over-engineered? Because I can. And because I'm bored."
================================================================================
`;
  }
}
