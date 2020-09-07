import React, { useEffect, useState } from "react";
import style from "./news.module.css";
import { connect } from "react-redux";
import { setNews } from "../../../actions/news-actions";
import NewsELement from "./news-element";
import { getNews, catchError } from "../../../service/requests";
import { useParams, NavLink } from "react-router-dom";
import { setResponseMessage } from "../../../actions/users-actions";
import { divideArr } from "../../../service/serviceFunctions";

const News = (props) => {
  useEffect(() => {
    getNews()
      .then((response) => props.setNews(response.data))
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
  }, []);

  const { pageNo } = useParams();
  const countOfPages = 10;
  const dividedNews = divideArr(props.news, countOfPages);
  const pages = [];

  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }

  return (
    <div className={style.news}>
      <h3>Last news:</h3>
      <div>
        {dividedNews[pageNo - 1].map((elem) => (
          <NewsELement elem={elem} key={elem.id} />
        ))}
      </div>

      <h4>Select page:</h4>
      <div>
        {pages.map((page) => (
          <NavLink
            className={style.page}
            key={page}
            to={`/news/${page}`}
          >
            {page}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNews: (news) => dispatch(setNews(news)),
    setResponseMessage: (value, text) =>
      dispatch(setResponseMessage(value, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
