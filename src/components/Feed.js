import React from 'react'
import "./feed.css"
import News from './News'
import { useSelector } from "react-redux";


export default function Feed() {
  const myNews = useSelector((state) => state.news.news)

  return (
    <div id="feed">
      {myNews.articles.map((item, key) => {
            return (
              <News key={key} item={item}/>
            );
          })}
    </div>
  )
}
