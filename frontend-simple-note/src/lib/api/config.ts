export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  notes: {
    base: `${API_BASE_URL}/notes`,
    deleted: `${API_BASE_URL}/notes/deleted`,
    restore: (id: number) => `${API_BASE_URL}/notes/restore/${id}`,
    byId: (id: number) => `${API_BASE_URL}/notes/${id}`,
  },
};