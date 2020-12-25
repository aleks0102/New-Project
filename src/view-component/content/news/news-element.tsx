import * as React from "react";
import "./news.module.css";
import Components from "../../../components/components";
import { capitalizeFirstLetter } from "../../../service/serviceFunctions";
import newsModel from "../../../models/newsModel";

interface NewsElementProps {
  elem: newsModel;
}

const NewsELement: React.FC<NewsElementProps> = ({ elem }) => {
  const [isShowed, changeShow] = React.useState(false);

  return (
    <div className="newsItem">
      <h4>{capitalizeFirstLetter(elem.title)}</h4>
      <p className="show" onClick={() => changeShow(true)}>
        {capitalizeFirstLetter(elem.body.slice(0, 30) + "...")}
        <span className="readMore"> Read more</span>
      </p>

      {isShowed ? (
        <div>
          <Components.NewsModal
            elem={elem}
            closeWindow={() => changeShow(false)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default NewsELement;
