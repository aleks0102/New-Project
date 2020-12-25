import * as React from "react";
import "./news.module.css";
import NewsELement from "./news-element";
import { getNews } from "../../../service/requests";
import { useParams } from "react-router-dom";
import { divideArr } from "../../../service/serviceFunctions";
import Components from "../../../components/components";

interface ParamTypes {
  pageNo: string;
}

const newsPerPage = 7;

export const News: React.FC<{}> = () => {
  React.useEffect(() => {
    if (!news.length)
      getNews()
        .then((response: any) => setNews(response.data))
        .catch((err: any) => {
          setResponseMessage(
            err.response.data.title || err.response.data.message
          );
          toggleShow(true);
        });
  }, []);

  const [news, setNews] = React.useState([]);
  const { pageNo } = useParams<ParamTypes>();
  const [responseMessage, setResponseMessage] = React.useState("");
  const [showMessage, toggleShow] = React.useState(false);

  const countOfPages = React.useMemo(() => {
    return Math.ceil(news.length / newsPerPage);
  }, [news]);

  const dividedNews = React.useMemo(() => {
    return divideArr(news, newsPerPage);
  }, [news, newsPerPage]);

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
        {!!dividedNews[Number(pageNo) - 1] &&
          dividedNews[Number(pageNo) - 1].map((elem) => (
            <NewsELement elem={elem} key={elem.id} />
          ))}
      </div>

      <Components.Pagination
        pageNo={Number(pageNo)}
        countOfPages={countOfPages}
      />
    </div>
  );
};
