import React from "react";
import { NewsModal } from "./news-modal/news-modal";
import { getNews } from "../service/requests";
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
import { LogOutModal } from "./logout-modal/logout-modal";
import AddPost from "../view-component/content/myposts/add-post";
import MyPosts from "../view-component/content/myposts/myposts";
import AvaModal from "./ava-modal/ava-modal";
import { Close } from "./close-span/close";
import { Ava } from "./ava/ava";
import { InputFiles } from "./input-file/input-file";
import { Warning } from "./warning/warning";
import ResponseMessage from "./message-modal/response-message";
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
  LogOutModal,
  AddPost,
  MyPosts,
  AvaModal,
  Close,
  Ava,
  InputFiles,
  Warning,
  ResponseMessage,
  EndSessionModal,
};

export default Components;
