import * as React from 'react';

export type PaginationItemProps<T extends HTMLElement = HTMLElement> = Omit<
  PaginationProps,
  'children' | 'total' | 'wrapperComponent'
> &
  React.HTMLAttributes<T>;

export interface PaginationState {
  pages: number[];
  previousPage: number;
  nextPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  getPageItemProps: <T extends HTMLElement = HTMLElement>(
    props: PaginationItemProps<T>
  ) => PaginationItemProps<T> & { onClick: (event: React.MouseEvent) => void };
}

export interface PaginationProps {
  total: number;
  children: (props: PaginationState) => React.ReactNode;
  limit?: number;
  pageCount?: number;
  currentPage?: number;
  pageValue?: number;
  onPageChange?: (page?: number, event?: React.MouseEvent) => void;
  wrapperComponent?: React.ReactNode;
  wrapperStyles?: { [key: string]: string };
}

declare const Pagination: React.ComponentType<PaginationProps>;

export default Pagination;
