// ─── Admin / Roles ───────────────────────────────────────────────────────────

export interface Role {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetRolesResponse {
  data: Role[];
  message?: string;
}

// ─── User Auth / Register ─────────────────────────────────────────────────────

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  roleId: string;
}

export interface RegisteredUser {
  id: string;
  fullName: string;
  email: string;
  roleId: string;
  createdAt?: string;
}

export interface RegisterResponse {
  data: RegisteredUser;
  message?: string;
}

// ─── Generic API Error ────────────────────────────────────────────────────────

export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}
