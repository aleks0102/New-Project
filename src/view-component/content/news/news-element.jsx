import React from "react";
import style from "./news.module.css";
import Components from "../../../components/components";
import { capitalizeFirstLetter } from "../../../service/serviceFunctions";

const NewsELement = (props) => {
  const [isShowed, changeShow] = React.useState(false);
  const elem = props.elem;

  return (
    <div className={style.newsItem}>
      <h4>{capitalizeFirstLetter(elem.title)}</h4>
      <p className={style.show} onClick={() => changeShow(true)}>
        {capitalizeFirstLetter(elem.body.slice(0, 30) + "...")}
        <span className={style.readMore}> Read more</span>
      </p>

      {isShowed ? (
        <div>
          <Components.NewsModal
            id={elem.id}
            title={elem.title}
            body={elem.body}
            onClick={() => changeShow(false)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default NewsELement;
