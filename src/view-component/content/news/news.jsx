import React from "react";
import style from "./news.module.css";
import NewsELement from "./news-element";
import { getNews } from "../../../service/requests";
import { useParams, NavLink } from "react-router-dom";
import { divideArr } from "../../../service/serviceFunctions";

const newsPerPage = 7;

export const News = () => {
  const [news, setNews] = React.useState([]);
  const { pageNo } = useParams();

  React.useEffect(() => {
    if (!news.length)
      getNews()
        .then((response) => setNews(response.data))
        .catch((err) => {
          //catchError(err, props.setResponseMessage, props.endSession);
        });
  }, []);

  const countOfPages = React.useMemo(() => {
    return Math.ceil(news.length / newsPerPage);
  }, [news]);

  const dividedNews = React.useMemo(() => {
    return divideArr(news, newsPerPage, newsPerPage);
  }, [news, newsPerPage]);


  console.log(dividedNews)

  const pages = [];
  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }

  return (
    <div className={style.news}>
      <h2>Last news:</h2>
      <div>
        {!!dividedNews[pageNo - 1] &&
          dividedNews[pageNo - 1].map((elem) => (
            <NewsELement elem={elem} key={elem.id} />
          ))}
      </div>
      <div className={style.pagination}>
        {pages.map((page) => (
          <NavLink
            className={pageNo == page ? style.active : style.page}
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
