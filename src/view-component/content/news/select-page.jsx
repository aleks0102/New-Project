import React from "react";
import style from "./news.module.css";
import { NavLink } from "react-router-dom";

export const SelectPage = (props) => {
  const pages = [];
  for (let i = 1; i <= props.countOfPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => (
        <NavLink
          className={style.page}
          onClick={() => props.loadNews(page)}
          key={page}
          to={`/news/${page}`}
          onClick={() => props.setCurrentPage(page)}
        >
          {page}
        </NavLink>
      ))}
    </div>
  );
};
