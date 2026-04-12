import type {
  GetRolesResponse,
  RegisterRequest,
  RegisterResponse,
  ApiError,
} from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...init?.headers },
    ...init,
  });

  const json = await res.json();

  if (!res.ok) {
    const err = json as ApiError;
    throw new Error(err.message ?? "Something went wrong");
  }

  return json as T;
}

// GET /v1/admin/roles/
export async function getRoles(): Promise<GetRolesResponse> {
  return request<GetRolesResponse>("/v1/admin/roles/");
}

// POST /v1/auth/register
export async function registerUser(
  payload: RegisterRequest,
): Promise<RegisterResponse> {
  return request<RegisterResponse>("/v1/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
