import { NewsModal } from "./news-modal/news-modal";
import { getNews } from "../service/requests";
import TextArea from "./textarea/textarea";
import Button from "./button/button";
import Input from "./input/input";
import SmallButton from "./small-button/small-button";
import PostModal from "./post-modal/post-modal";
import { LogOutModal } from "./logout-modal/logout-modal";
import AvaModal from "./ava-modal/ava-modal";
import { Ava } from "./ava/ava";
import { InputFiles } from "./input-file/input-file";
import ResponseMessage from "./message-modal/response-message";
import EndSessionModal from "./end-session-modal/end-session-modal";
import { Pagination } from "./pagination/pagination";
import ModalWindow from "./modalWindow/modal-window";

const Components = {
  NewsModal,
  getNews,
  TextArea,
  Button,
  Input,
  SmallButton,
  PostModal,
  LogOutModal,
  AvaModal,
  Ava,
  InputFiles,
  ResponseMessage,
  EndSessionModal,
  Pagination,
  ModalWindow,
};

export default Components;
