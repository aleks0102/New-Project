import React, { useEffect} from "react";
import style from "./news.module.css";
import { connect } from "react-redux";
import { setDataAC, setCurrentPageAC } from "../../../actions/news-actions";
import Components from "../../../components/components";

const News = (props) => {
  useEffect(() => {
    if (props.news.length == 0) {
      let setNews = (news) => {
        props.setData(news);
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
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    currentPage: state.news.currentPage,
    pageSize: state.news.pageSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (news) => dispatch(setDataAC(news)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
