import * as React from "react";
import "./news-modal.css";
import Components from "../components";
import { capitalizeFirstLetter } from "../../service/serviceFunctions";
import newsModel from "../../models/newsModel";

interface NewsModalProps {
  elem: newsModel;
  closeWindow: Function;
}

export const NewsModal: React.FC<NewsModalProps> = ({ elem, closeWindow }) => {
  return (
    <Components.ModalWindow closeWindow={closeWindow}>
      <h2> {capitalizeFirstLetter(elem.title)}</h2>
      <p>{capitalizeFirstLetter(elem.body)}</p>
    </Components.ModalWindow>
  );
};
