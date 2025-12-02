export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string | null;
  message?: string | null;
  errors?: Record<string, string[]> | null;
};

export class ServiceError extends Error {
  statusCode: number;
  code?: string;
  details?: any;
  constructor(
    message: string,
    statusCode: number = 500,
    code?: string,
    details?: any
  ) {
    super(message);
    this.name = "ServiceError";
    this.statusCode = statusCode;
    this.code = code ?? "INTERNAL_SERVER_ERROR";
    this.details = details;
  }
}
