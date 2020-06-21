import React, { useEffect, useState } from "react";
import style from "./news.module.css";
import { connect } from "react-redux";
import { SetDataAC, setCurrentPageAC } from "../../../actions/news-actions";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";

const News = (props) => {
  let isAutorized = props.isAutorized;

  useEffect(() => {
    if (props.news.length == 0) {
      let setNews = (news) => {
        props.SetData(news);
      };
      Components.getNews(setNews);
    }
  }, []);

  let news = props.news;
  let currentPage = props.currentPage;
  let pageSize = props.pageSize;
  let indexOfLast = currentPage * pageSize;
  let indexOfFirst = indexOfLast - pageSize;
  let currentPosts = news.slice(indexOfFirst, indexOfLast);
  let pagination = (pageNumber) => props.setCurrentPage(pageNumber);

  if (isAutorized == true) {
    return (
      <div className={style.news}>
        <h3>Last news:</h3>
        {currentPosts.map((elem) => (
          <div key={elem.id}>
            <Components.NewsElement elem={elem} />
          </div>
        ))}
        <h4>Select page:</h4>
        <Components.SelectPage
          totalNews={news.length}
          pageSize={pageSize}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    currentPage: state.newsPage.currentPage,
    pageSize: state.newsPage.pageSize,
    isAutorized: state.authData.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetData: (news) => dispatch(SetDataAC(news)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
