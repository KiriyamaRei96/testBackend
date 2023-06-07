/* eslint-disable @typescript-eslint/no-explicit-any */
interface ObjectType {
  [key: string]: any;
}
export interface ErrorType {
  error?: string;
  errors?: any;
}
export interface ResponseType {
  data?: any;
  message?: string;
  status: 1;
  paginationData?: {
    page: number;
    limit: number;
    totalCount: number;
    pageCount: number;
    currentPage: number;
  };
}
