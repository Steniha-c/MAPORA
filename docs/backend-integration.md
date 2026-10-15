# MAPORA backend integration contract

## Current status

This repository currently contains no application source, API server, data models, upload provider, authentication setup, or reconstruction engine. The frontend therefore does not send videos or claim that a project was generated. Sample project records, room labels, dimensions, floor-plan geometry, 3D geometry, and the processing-stage preview are illustrative and explicitly labelled as such.

Set `VITE_MAPORA_API_BASE` to the confirmed API origin only after the backend team publishes its real contracts. `src/services/api.ts` is the single frontend service boundary. The suggested route names below are placeholders for discussion, not assertions that these endpoints already exist. Confirm authentication, payloads, response schemas, upload limits, progress event protocol, and error shape with the backend team before wiring these calls.

## Suggested contracts to confirm

| Capability | Suggested contract | Frontend needs |
| --- | --- | --- |
| List projects | `GET /projects` → `MapProject[]` | Stable IDs, display name, location/metadata, status, creation timestamp, thumbnail or preview reference. |
| Create/upload mapping | `POST /projects` as multipart `video` | Confirm accepted formats, max size, auth, storage behavior, created project ID, and actual transfer-progress events. |
| Processing status | `GET /projects/{id}/status` or server-sent events/websocket | Canonical stage/status enums and truthful progress/events; support failure and retry. |
| 2D floor plan | `GET /projects/{id}/floor-plan` | Coordinate system, units, wall/room geometry, labels, dimensions, annotations, versioning. Current `unknown[]` placeholders must be replaced by shared validated schemas. |
| 3D result | `GET /projects/{id}/scene` | Supported geometry format/URL, asset authorization and lifetime, coordinate system, units, texture policy, loading/error semantics. |
| Export/share | Backend-defined endpoints only | No export or sharing action is presented as working until supported. |
| Authentication/settings | Backend-defined session and account APIs | No account/session functionality is currently implemented. |

## Integration sequence

1. Agree the API schema and error/status conventions with the backend owner.
2. Add runtime validation for payloads and replace sample fixtures with API-backed loading/empty/error states.
3. Upload using the actual accepted MIME types and limits; drive progress UI only from real transfer events.
4. Subscribe to real processing events/status; never infer completion from elapsed time.
5. Adapt the generated geometry into the SVG plan and Three.js scene; reserve illustrative sample IDs for the demo workspace.
6. Add authentication, export, delete/rename, sharing, and persistence only when corresponding endpoints and permissions are available.

The current `createMapping` service method is intentionally not called by the demo upload flow. A user can select and preview a local video, but continuing launches a simulated, labelled UI sequence without transmitting that video.
