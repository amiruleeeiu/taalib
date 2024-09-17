export interface Pageable<T> {
  data: T[];
  total: number;
  totalPages: number;
  currentPage: number;
}
