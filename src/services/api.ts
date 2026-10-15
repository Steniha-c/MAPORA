import type { MapProject } from '../types';

const API_BASE = import.meta.env.VITE_MAPORA_API_BASE?.replace(/\/$/, '');

export class ApiUnavailableError extends Error {
  constructor(message = 'The MAPORA backend is not configured in this repository yet.') {
    super(message);
    this.name = 'ApiUnavailableError';
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE) throw new ApiUnavailableError();
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { ...(init?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }), ...init?.headers },
  });
  if (!response.ok) throw new Error(`MAPORA API request failed (${response.status}).`);
  return response.json() as Promise<T>;
}

export const maporaApi = {
  listProjects: () => request<MapProject[]>('/projects'),
  createMapping: (video: File) => {
    const body = new FormData();
    body.append('video', video);
    return request<{ id: string; status: string }>('/projects', { method: 'POST', body });
  },
  getProcessingStatus: (projectId: string) => request<{ stage: string; progress: number; status: string }>(`/projects/${encodeURIComponent(projectId)}/status`),
  getFloorPlan: (projectId: string) => request<{ rooms: unknown[]; walls: unknown[] }>(`/projects/${encodeURIComponent(projectId)}/floor-plan`),
  getScene: (projectId: string) => request<{ geometryUrl: string }>(`/projects/${encodeURIComponent(projectId)}/scene`),
};
