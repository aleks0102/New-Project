import React from "react";
import style from "./select-page.module.css";

export const SelectPage = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalNews / props.pageSize); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul>
      {pageNumbers.map((num) => (
        <span
          className={props.currentPage == num ? style.new : style.pages}
          key={num}
          onClick={() => props.pagination(num)}
        >
          {num}
        </span>
      ))}
    </ul>
  );
};
