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
        <div className="category" data-content="Gündem">Gündem</div>
        <div className="category" data-content="Spor">Spor</div>
        <div className="category" data-content="Siyaset">Siyaset</div>
        <div className="category" data-content="Dünya">Dünya</div>
        <div className="category" data-content="Magazin">Magazin</div>
        <div className="category" data-content="Ekonomi">Ekonomi</div>
        <div className="category" data-content="Teknoloji">Teknoloji</div>
        <div className="category" data-content="Hayat">Hayat</div>
        <div className="category" data-content="Bilim">Bilim</div>
        <div className="category" data-content="Köşe Yazıları">Köşe Yazıları</div>
        <div className="category" data-content="Yurtdışı">Yurtdışı</div>
        <div className="category" data-content="Oyun">Oyun</div>
      </div>
    </div>
  );
}
