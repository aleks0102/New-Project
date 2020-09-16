import React from "react";
import { Link } from "react-router-dom";
import style from "./pagination.module.css";

export const Pagination = (props) => {
  const pages = [];

  for (let i = 1; i <= props.countOfPages; i++) {
    pages.push(i);
  }
  return (
    <div className={style.paginationWrap}>
      <h3>Cтраница:</h3>
      <div className={style.pagination}>
        {pages.map((page) => (
          <Link
            className={props.pageNo == page ? style.active : style.page}
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
