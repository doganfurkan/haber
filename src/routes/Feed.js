import React from 'react'
import "./feed.css"
import News from '../components/News'
import { useSelector } from "react-redux";


export default function Feed() {
  const myNews = useSelector((state) => state.news.news)

  return (
    <div id="feed">
      {myNews.result.map((item, key) => {
            return (
              <News key={key} item={item}/>
            );
          })}
    </div>
  )
}
