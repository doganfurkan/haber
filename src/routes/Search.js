import React from "react";
import "./search.css";
import { PiMagnifyingGlass } from "react-icons/pi";

export default function Search() {
  return (
    <div id="search">
      <h1>Arama</h1>
      <form action="#" id="searchBox">
        <input type="search" name="searchInput" id="searchInput" placeholder="Tüm Haberler arasında arama yap"/>
        <button id="searchButton">
          <PiMagnifyingGlass />
        </button>
      </form>
      <div id="categories">
        <div className="category">Gündem</div>
        <div className="category">Spor</div>
        <div className="category">Siyaset</div>
        <div className="category">Dünya</div>
        <div className="category">Magazin</div>
        <div className="category">Ekonomi</div>
        <div className="category">Teknoloji</div>
        <div className="category">Hayat</div>
        <div className="category">Bilim</div>
        <div className="category">Köşe Yazıları</div>
        <div className="category">Yurtdışı</div>
        <div className="category">Oyun</div>
      </div>
    </div>
  );
}
