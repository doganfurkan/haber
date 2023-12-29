import React from "react";
import "./news.css";
import { PiHeart, PiChatCircle, PiShareNetwork } from "react-icons/pi";

export default function News({item}) {
  return (
    <div className="news">
      <div className="imgAndButtons" style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${item.image})`}}>
        <div className="newsButtonsContainer">
          <div className="newsWriter">{/*<img src="https://picsum.photos/200" alt="writer" /> */}<p>{item.source}</p></div>
          <div className="newsActions">
            <button className="like"><PiHeart/> 50</button>
            <button className="comment"><PiChatCircle/> 6</button>
            <button className="share"><PiShareNetwork/></button>
          </div>
        </div>
      </div>
      <div className="NewsContentContainer">
        <div className="newsContent">
          <h1 className="newsHeader">{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div className="dateAndMore">
          <div className="newsDate">{item.publishedAt ? item.publishedAt : item.source}</div>
          <a href={item.url} target="_blank" rel="noreferrer" className="readMore">Devamını Oku {">"}</a>
        </div>
      </div>
    </div>
  );
}
