import * as React from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

type PaginationProps = {
  pageNo: number;
  countOfPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  pageNo,
  countOfPages,
}) => {
  const pages = [];

  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }
  return (
    <div className="paginationWrap">
      <h3>Page:</h3>
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
