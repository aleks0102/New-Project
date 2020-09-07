import React, { useEffect, useState } from "react";
import style from "./news.module.css";
import { connect } from "react-redux";
import { setNews } from "../../../actions/news-actions";
import NewsELement from "./news-element";
import { getNews, catchError } from "../../../service/requests";
import { SelectPage } from "./select-page";
import { Route, Switch } from "react-router-dom";
import { setResponseMessage } from "../../../actions/users-actions";
import { divideArr } from "../../../service/serviceFunctions";

const News = (props) => {
  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    getNews()
      .then((response) => props.setNews(response.data))
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const countOfPages = 10;
  const dividedNews = divideArr(props.news, countOfPages);

  return (
    <div className={style.news}>
      <h3>Last news:</h3>
      <Switch>
        {dividedNews.map(() => (
          <Route path={`/news/${currentPage}`}>
            <div>
              {dividedNews[currentPage - 1].map((elem) => (
                <NewsELement elem={elem} />
              ))}
            </div>
          </Route>
        ))}
      </Switch>
      <h4>Select page:</h4>
      <SelectPage
        countOfPages={countOfPages}
        loadNews={loadNews}
        setCurrentPage={setCurrentPage}
      />
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
