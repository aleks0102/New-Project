import React, { useEffect } from "react";
import style from "./news.module.css";
import SmallButton from "../../../components/small-button/small-button";
import { connect } from "react-redux";
import {
  ShowAC,
  HideAC,
  SetDataAC,
  setCurrentPageAC,
} from "../../../actions/news-actions";
import { getNews } from "../../../news-ajax";

const News = (props) => {
  let setNews = (news) => {
    props.SetData(news);
  };

  useEffect(() => {
    getNews(setNews);
  }, []);

  let Show = (id) => {
    props.Show(id);
  };

  let Hide = (id) => {
    props.Hide(id);
  };

  let news = props.news;
  let currentPage = props.currentPage;
  let pageSize = props.pageSize;
  let indexOfLast = currentPage * pageSize;
  let indexOfFirst = indexOfLast - pageSize;
  let currentPosts = news.slice(indexOfFirst, indexOfLast);
  let pagination = (pageNumber) => props.setCurrentPage(pageNumber);

  return (
    <div className={style.news}>
      <h3>Last news:</h3>
      <h4>Select page:</h4>
      <SelectPage
        totalNews={news.length}
        pageSize={pageSize}
        pagination={pagination}
      />
      {currentPosts.map((element) => (
        <div key={element.id}>
          <h2>{element.title}</h2>
          {element.isShowed ? (
            <div>
              <SmallButton onClick={() => Hide(element.id)} text={"Hide"} />
              <p>{element.body}</p>
            </div>
          ) : (
            <SmallButton text={"Show all"} onClick={() => Show(element.id)} />
          )}
        </div>
      ))}
    </div>
  );
};

const SelectPage = ({ pageSize, totalNews, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNews / pageSize); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((num) => (
          <span
            className={style.pages}
            key={num}
            onClick={() => pagination(num)}
          >
            {num}
          </span>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    currentPage: state.newsPage.currentPage,
    pageSize: state.newsPage.pageSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Show: (id) => dispatch(ShowAC(id)),
    Hide: (id) => dispatch(HideAC(id)),
    SetData: (news) => dispatch(SetDataAC(news)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
