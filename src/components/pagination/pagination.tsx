import * as React from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

type PaginationProps = {
  pageNo: number;
  countOfPages: number;
};

export const Pagination = ({ pageNo, countOfPages }: PaginationProps) => {
  const pages = [];

  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }
  return (
    <div className="paginationWrap">
      <h3>Cтраница:</h3>
      <div className="pagination">
        {pages.map((page) => (
          <Link
            className={pageNo == page ? "active" : "page"}
            key={page}
            to={`/news/${page}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};
