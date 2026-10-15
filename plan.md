# MAPORA implementation plan

## Current repository findings

The selected `Steniha-c/MAPORA` repository has no frontend or backend source, package manifest, routes, or API contracts. Its only tracked entry is a gitlink at `MAPORA` (`160000`, commit `122ec5e`), with no `.gitmodules` mapping, so the linked source cannot be resolved by this checkout. The implementation will preserve that gitlink and add the frontend at the repository root. No existing backend or functionality will be replaced.

## Product and implementation approach

Create a runnable React + TypeScript + Vite single-page frontend with a route-aware public landing page and an authenticated-style product workspace shell. Routes cover Overview, New Mapping, My Projects, project floor plan, and project 3D view. Use client-side sample records only where explicitly marked as demonstration data; upload validation and video preview work locally, while processing remains a clearly labelled demonstration until backend events exist. Floor-plan controls operate on a labelled illustrative SVG plan; the 3D view uses an interactive Three.js scene with orbit/zoom/pan controls and a prominent demo disclaimer. Keep API access behind a typed service layer with documented endpoint contracts and no invented successful responses.

## Design

- **Design Movement:** cinematic architectural editorial meets precision-instrument interface.
- **Core Principles:** spatial clarity; restrained orange emphasis; high contrast without glare; motion only when it communicates state or depth.
- **Color Philosophy:** near-black and graphite surfaces evoke a dark model studio, while the MAPORA orange identifies actions, selection, and the path from raw footage to a spatial result.
- **Layout Paradigm:** editorial full-width landing sections flowing into a compact, persistent workspace rail and broad visualization canvas.
- **Signature Elements:** connected-point MAPORA monogram; fine coordinate/grid linework; orange room-edge selection and scan-path annotations.
- **Interaction Philosophy:** direct manipulation for upload, pan, zoom, selection, and camera controls; all unavailable backend actions disclose that they are demonstration-only.
- **Animation:** short, deliberate entrances and hover/selection transitions; no perpetual distracting motion; disable nonessential motion with `prefers-reduced-motion`.
- **Typography System:** Space Grotesk for display and interface headings, Inter for body and dense labels; use editorial scale contrast and compact technical metadata.
- **Brand Essence:** turns an indoor walkthrough into an inspectable spatial map for people documenting and understanding spaces; precise, immersive, intelligent.
- **Brand Voice:** clear, assured, spatial. Examples: “Turn every walkthrough into a living map.” “A spatial preview — demonstration data, not a processed result.”
- **Wordmark & Logo:** geometric orange floor-plan corner mark with three connected nodes paired with a bold MAPORA wordmark.
- **Signature Brand Color:** MAPORA orange `#FF6A00`.

## Project structure

- `src/main.tsx` — React entry and routing.
- `src/App.tsx` — route definitions and page composition.
- `src/styles.css` — shared responsive design system and page styles.
- `src/components/` — reusable logo, navigation, dashboard shell, visualization and interaction components.
- `src/pages/` — landing, workspace, upload, projects, processing, floor-plan and 3D viewer routes.
- `src/services/` — typed API boundary, currently unconfigured and documented.
- `public/manus-routes.json` — route manifest served as a static JSON file.
- `docs/backend-integration.md` — proposed API contract to confirm with the backend team.

## Constraints

Use existing repository conventions if source code appears later; none exists in this checkout. Do not claim backend upload limits, processing results, saved projects, exports, authentication, or generated geometry. Keep demo fixtures clearly identified. The local preview serves this repository directly; no deployment or push to the remote is performed unless requested.