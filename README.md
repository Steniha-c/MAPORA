# MAPORA — Spatial Intelligence Frontend

Premium, responsive React frontend concept for turning indoor video walkthroughs into spatial maps. This repository checkout originally contained only an unresolved gitlink at `MAPORA/`; there was no runnable frontend or backend source. The root application is a new implementation and does not replace an existing service.

## Run locally

```bash
npm install
npm run dev
```

Vite serves the application at `http://localhost:5173`. For a production build:

```bash
npm run build
npm run preview
```

## Routes

- `/` — cinematic public landing page.
- `/app` — sample workspace overview.
- `/app/new` — local video selection, type validation, and browser preview.
- `/app/projects` — searchable and status-filterable sample projects.
- `/app/project/:id` — interactive illustrative floor-plan viewer.
- `/app/project/:id/3d` — interactive Three.js illustrative scene.
- `/app/project/:id/processing` — visibly simulated processing-stage preview.
- `/app/settings` — honest project/settings status page.

## Demonstration-only behaviors

The sample records, room names/areas, SVG floor plan, Three.js model, and processing stages are illustrative. The selected video remains in the browser for preview and is not uploaded. No real processing, persistence, authentication, export, or sharing is connected. Upload size limits are intentionally not invented. See [`docs/backend-integration.md`](docs/backend-integration.md) for proposed contracts to confirm with the backend team.
