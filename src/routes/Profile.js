import React from "react";
import "./profile.css";
import { PiGear, PiEnvelopeSimple, PiInfo, PiQuestion } from "react-icons/pi";


export default function Profile() {
  return (
    <div id="profile">
      <h1>Profil</h1>
      <div id="myProfile">
        <img
          src="https://picsum.photos/200"
          alt="profile name"
          id="profileImg"
        />
        <div id="profileDetail">
          <div id="profileName">Misafir Kullanıcı</div>
          <div id="profilesubtext">Giriş yapın veya kaydolun</div>
        </div>
      </div>
      <div id="profileList">
        <button><PiGear/>Ayarlar ve Gizlilik</button>
        <button><PiEnvelopeSimple/>Bize Ulaşın</button>
        <button><PiQuestion/>Sıkça Sorulan Sorular</button>
        <button><PiInfo/>Hakkımızda</button>
      </div>
    </div>
  );
}
