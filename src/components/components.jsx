import React from "react";
import { NewsModal } from "./news-modal/news-modal";
import { getNews } from "../service/getnews";
import MessageElement from "../view-component/content/messages/messages.element";
import MainTextArea from "./main-textarea/textarea";
import MainButton from "./main-button/main-button";
import MainInput from "./main-input/main-input";
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
import AvaModal from "./changeava-modal/ava-modal";
import { Close } from "./close-span/close";
import { Ava } from "./ava/ava";
import { InputFiles } from "./input-files/input-file";

const Components = {
  NewsModal,
  getNews,
  MessageElement,
  MainTextArea,
  MainButton,
  MainInput,
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
};

export default Components;
