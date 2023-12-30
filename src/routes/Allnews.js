import React from "react";
import "./allnews.css";
import Smallnews from "../components/Smallnews";
import { useSelector } from "react-redux";
import { PiFunnel } from "react-icons/pi";

export default function Allnews() {
  const myNews = useSelector((state) => state.news.news);

  return (
    <div id="allnews">
      <h1>Tüm Haberler</h1>
      <div id="allNewsFilter">
        <div id="popularCategories">
          <button>Gündem</button>
          <button>Spor</button>
          <button>Siyaset</button>
          <button>Teknoloji</button>
          <button>Ekonomi</button>
        </div>
        <button id="filterButton">
          <PiFunnel/> Filtrele
        </button>
      </div>
      <div id="allnewscontainer">
        <div id="allnewsleft">
          {myNews.result.filter(i => !(i.key % 2)).map((item) => {
            return <Smallnews key={item.key} item={item} />;
          })}
        </div>
        <div id="allnewsright">
          {myNews.result.filter(i => (i.key % 2)).map((item, key) => {
            return <Smallnews key={key} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
