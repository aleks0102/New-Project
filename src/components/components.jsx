import React from "react";
import { NewsModal } from "./news-modal/news-modal";
import { getNews } from "../get-queries/getnews";
import MessageElement from "../view-component/content/messages/messages.element";
import MainTextArea from "./main-textarea/textarea";
import MainButton from "./main-button/main-button";
import MainInput from "./main-input/main-input";
import PostElement from "../view-component/content/profile/myposts/post-element";
import SmallButton from "./small-button/small-button";
import Header from "../view-component/header/header";
import Content from "../view-component/content/content";
import Profile from "../view-component/content/profile/profile";
import Home from "../view-component/content/home/home";
import Messages from "../view-component/content/messages/messages";
import News from "../view-component/content/news/news";
import Login from "../view-component/content/login/login";
import Registration from "../view-component/content/registration/registration";
import MyPosts from "../view-component/content/profile/myposts/myposts";
import Info from "../view-component/content/profile/info/info";
import PostModal from "./post-modal/post-modal";
import { SelectPage } from "./select-page/select-page";
import AddPost from "../view-component/content/profile/add-post/add-post";
import { LogOutModal } from "./logout-modal/logout-modal";

const Components = {
  NewsModal,
  getNews,
  MessageElement,
  MainTextArea,
  MainButton,
  MainInput,
  PostElement,
  SmallButton,
  Header,
  Content,
  Profile,
  Home,
  Messages,
  News,
  Login,
  Registration,
  MyPosts,
  Info,
  PostModal,
  SelectPage,
  AddPost,
  LogOutModal,
};

export default Components;
