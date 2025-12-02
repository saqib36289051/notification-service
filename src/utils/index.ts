import { type ApiResponse, ServiceError } from "@/types/api.js";

export function createApiResponse<T>(
  data: T,
  message?: string,
  errors?: Record<string, string[]>
): ApiResponse<T> {
  return {
    success: true,
    data,
    message: message ?? null,
    errors: errors ?? null,
  };
}

export function createServiceError(
  message: string,
  statusCode: number = 500,
  code?: string,
  details?: any
): ServiceError {
  return new ServiceError(message, statusCode, code, details);
}
