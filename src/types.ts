export type ProjectStatus = 'Ready' | 'Processing' | 'Needs attention';

export interface MapProject {
  id: string;
  name: string;
  location: string;
  createdAt: string;
  status: ProjectStatus;
  rooms: number;
  duration: string;
  color: string;
}

// Explicitly illustrative records; no backend or user data exists in this repository.
export const SAMPLE_PROJECTS: MapProject[] = [
  { id: 'sample-apartment', name: 'Northlight Apartment', location: '2 bed · sample space', createdAt: 'Oct 12, 2026', status: 'Ready', rooms: 6, duration: '02:14', color: 'sand' },
  { id: 'sample-studio', name: 'Studio 04', location: 'Creative studio · sample space', createdAt: 'Oct 08, 2026', status: 'Processing', rooms: 4, duration: '01:38', color: 'blue' },
  { id: 'sample-loft', name: 'The Corner Loft', location: 'Loft · sample space', createdAt: 'Oct 02, 2026', status: 'Needs attention', rooms: 5, duration: '03:06', color: 'plum' },
];
