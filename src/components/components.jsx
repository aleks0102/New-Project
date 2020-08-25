import React from "react";
import { NewsModal } from "./news-modal/news-modal";
import { getNews } from "../service/getnews";
import MessageElement from "../view-component/content/messages/messages.element";
import TextArea from "./textarea/textarea";
import Button from "./button/button";
import Input from "./input/input";
import SmallButton from "./small-button/small-button";
import Header from "../view-component/header/header";
import Content from "../view-component/content/content";
import Profile from "../view-component/content/profile/profile";
import Home from "../view-component/content/home/home";
import Messages from "../view-component/content/messages/messages";
import News from "../view-component/content/news/news";
import Login from "../view-component/content/login/login";
import Registration from "../view-component/content/registration/registration";
import PostModal from "./post-modal/post-modal";
import { SelectPage } from "./select-page/select-page";
import { LogOutModal } from "./logout-modal/logout-modal";
import NewsElement from "../view-component/content/news/news-element";
import AddPost from "../view-component/content/myposts/add-post";
import MyPosts from "../view-component/content/myposts/myposts";
import PostElement from "../view-component/content/myposts/post-element";
import AvaModal from "./ava-modal/ava-modal";
import { Close } from "./close-span/close";
import { Ava } from "./ava/ava";
import { InputFiles } from "./input-file/input-file";
import { Warning } from "./warning/warning";
import MessageModal from "./message-modal/message-modal";
import EndSessionModal from "./end-session-modal/end-session-modal";

const Components = {
  NewsModal,
  getNews,
  MessageElement,
  TextArea,
  Button,
  Input,
  SmallButton,
  Header,
  Content,
  Profile,
  Home,
  Messages,
  News,
  Login,
  Registration,
  PostModal,
  SelectPage,
  LogOutModal,
  NewsElement,
  AddPost,
  MyPosts,
  PostElement,
  AvaModal,
  Close,
  Ava,
  InputFiles,
  Warning,
  MessageModal,
  EndSessionModal,
};

export default Components;
