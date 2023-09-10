/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import "./card.scss"

export default ({title, desc,img}) => {
  return (
    <div className="cart">
    <div className="akscart">
      <img className="aksz" src={img} />
      <div className="matnz">
        <p className="host">{title}</p>
      </div>
      <div className="nasb">
        <p>
         {desc}
        </p>
      </div>
      <div className='dokmeKharid'>
      <p>مشاهده پلن ها</p>
      </div>
    </div>
  </div>
  )
}


