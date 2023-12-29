import { useState } from "react";
import "./news.css";
import {
  PiHeart,
  PiHeartFill,
  PiChatCircle,
  PiShareNetwork,
  PiCopy,
  PiWhatsappLogo,
} from "react-icons/pi";
var interactionNumber = Math.round(Math.random() * 100);
var commentNumber = Math.round(
  interactionNumber * ((10 + Math.random() * 20) / 100)
);

export default function News({ item }) {
  const [shareButton, setShareButton] = useState("passive");
  const [likeButton, setLikeButton] = useState(false);

  return (
    <div className="news">
      <div
        className="imgAndButtons"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${item.image})`,
        }}
      >
        <div className="newsButtonsContainer">
          <div className="newsWriter">
            {/*<img src="https://picsum.photos/200" alt="writer" /> */}
            <p>{item.source}</p>
          </div>
          <div className="newsActions">
            <button
              className={likeButton ? "like liked" : "like"}
              onClick={() => {
                setLikeButton(!likeButton);
              }}
            >
              {likeButton ? <PiHeartFill /> : <PiHeart />}{" "}
              {!likeButton ? interactionNumber : interactionNumber + 1}
            </button>
            <button className="comment">
              <PiChatCircle /> {commentNumber}
            </button>
            <div
              className={`share ${shareButton}`}
              onClick={() => {
                shareButton === "passive"
                  ? setShareButton("active")
                  : setShareButton("passive");
              }}
            >
              <PiShareNetwork />{" "}
              <div className="shareMenu">
                <div
                  className="copyLink"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(item.url)
                      .then(() => {
                        alert("successfully copied");
                      })
                      .catch(() => {
                        alert("something went wrong");
                      });
                  }}
                >
                  <PiCopy /> Haber Linkini Kopyala
                </div>
                <a className="shareWhatsapp" href={`https://api.whatsapp.com/send?text=${item.url}`}>
                  <PiWhatsappLogo /> Whatsapp ile Paylaş
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="NewsContentContainer">
        <div className="newsContent">
          <h1 className="newsHeader">{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div className="dateAndMore">
          <div className="newsDate">
            {item.publishedAt ? item.publishedAt : item.source}
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="readMore"
          >
            Devamını Oku {">"}
          </a>
        </div>
      </div>
    </div>
  );
}
