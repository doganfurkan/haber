import React from 'react'
import './header.css';
import { PiList } from "react-icons/pi";

export default function Header() {
  return (
    <header>
        <div id="logo">haber<span>ci</span></div>
        <div id="openMenu"><PiList/></div>
    </header>
  )
}
