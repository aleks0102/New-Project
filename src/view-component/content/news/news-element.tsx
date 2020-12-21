import * as React from 'react'
import "./news.module.css";
import Components from "../../../components/components";
import { capitalizeFirstLetter } from "../../../service/serviceFunctions";

interface NewsElementProps{
  id: number;
  title: string;
  body: string;
};

const NewsELement = ( props : NewsElementProps) => {
  const [isShowed, changeShow] = React.useState(false);

  return (
    <div className="newsItem">
      <h4>{capitalizeFirstLetter(props.title)}</h4>
      <p className="show" onClick={() => changeShow(true)}>
        {capitalizeFirstLetter(props.body.slice(0, 30) + "...")}
        <span className="readMore"> Read more</span>
      </p>

      {isShowed ? (
        <div>
          <Components.NewsModal
            id={props.id}
            title={props.title}
            body={props.body}
            onClick={() => changeShow(false)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default NewsELement;
