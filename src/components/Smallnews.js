import React from 'react'
import "./smallnews.css"

export default function smallNews({item}) {
  return (
    <div className='smallNews'>
        <div className="smallNewsImage"><img src={item.image} alt="haber-resmi"/></div>
        <div className="smallNewsContent">
            <h1>{item.name}</h1>
        </div>
    </div>
  )
}
