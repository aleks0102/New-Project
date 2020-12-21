import * as React from "react";
import "./news.module.css";
import NewsELement from "./news-element";
import { catchError, getNews } from "../../../service/requests";
import { useParams } from "react-router-dom";
import { divideArr } from "../../../service/serviceFunctions";
import Components from "../../../components/components";

const newsPerPage = 7;

export const News = (props: any) => {
  const [news, setNews] = React.useState([]);
  const { pageNo }: any = useParams();
  const [responseMessage, setResponseMessage] = React.useState("");
  const [showMessage, toggleShow] = React.useState(false);
  React.useEffect(() => {
    if (!news.length)
      getNews()
        .then((response: any) => setNews(response.data))
        .catch((err: any) => {
          setResponseMessage(
            err.response.data.title || err.response.data.message
          );
        });
    toggleShow(true);
  }, []);

  const countOfPages = React.useMemo(() => {
    return Math.ceil(news.length / newsPerPage);
  }, [news]);

  const dividedNews = React.useMemo(() => {
    return divideArr(news, newsPerPage);
  }, [news, newsPerPage]);

  console.log(dividedNews);

  const pages = [];
  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }

  return (
    <div className="news">
      {showMessage && (
        <Components.ResponseMessage
          text={responseMessage}
          closeWindow={() => toggleShow(false)}
        />
      )}
      <h2>Last news:</h2>
      <h2>{pageNo}</h2>
      <div>
        {!!dividedNews[pageNo - 1] &&
          dividedNews[pageNo - 1].map((elem) => (
            <NewsELement
              id={elem.id}
              title={elem.title}
              body={elem.body}
              key={elem.id}
            />
          ))}
      </div>

      <Components.Pagination pageNo={pageNo} countOfPages={countOfPages} />
    </div>
  );
};
