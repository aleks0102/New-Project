import Axios from "axios";

export const getNews = async (setNews) => {
  const result = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  setNews(result.data);
};
