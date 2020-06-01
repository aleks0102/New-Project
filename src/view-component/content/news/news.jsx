import React, { useEffect, useState } from "react";
import style from "./news.module.css";
import { connect } from "react-redux";
import { SetDataAC, setCurrentPageAC } from "../../../actions/news-actions";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";

const News = (props) => {
  let [isShowed, changeShow] = useState(null);
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
        <h4>Select page:</h4>
        <Components.SelectPage
          totalNews={news.length}
          pageSize={pageSize}
          pagination={pagination}
        />
        {currentPosts.map((element) => (
          <div key={element.id}>
            <h2 className={style.show} onClick={() => changeShow(true)}>
              {element.title.slice(0, 30) + "..."}
            </h2>
            {isShowed ? (
              <div>
                <Components.NewsModal
                  title={element.title}
                  body={element.body}
                  onClick={() => changeShow((isShowed = false))}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    currentPage: state.newsPage.currentPage,
    pageSize: state.newsPage.pageSize,
    isAutorized: state.userData.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetData: (news) => dispatch(SetDataAC(news)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
