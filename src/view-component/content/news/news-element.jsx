import React, { useState } from "react";
import style from "./news.module.css";
import Components from "../../../components/components";

const NewsELement = (props) => {
  const [isShowed, changeShow] = useState(false);
  const elem = props.elem;

  return (
    <div>
      <h2 className={style.show} onClick={() => changeShow(true)}>
        {elem.title.slice(0, 30) + "..."}
      </h2>
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
