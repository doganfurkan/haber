import React from "react";
import "./allnews.css";
import Smallnews from "../components/Smallnews";
import { useSelector } from "react-redux";

export default function Allnews() {
  const myNews = useSelector((state) => state.news.news);

  return (
    <div id="allnews">
        <h1>Tüm Haberler</h1>
      <div id="allnewscontainer">
        <div id="allnewsleft">
          {myNews.result.map((item, key) => {
            if (!(key % 2)) return <Smallnews key={key} item={item} />;
          })}
        </div>
        <div id="allnewsright">
          {myNews.result.map((item, key) => {
            if (key % 2) return <Smallnews key={key} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
