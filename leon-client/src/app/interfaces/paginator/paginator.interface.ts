export interface IPaginatorParamters {
    page: number;
    size: number;
}

export interface NumberedPagination {
    index: number;
    maxPages: number;
    pages: number[];
}