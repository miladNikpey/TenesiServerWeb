/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
import styles from './optionCard.module.scss'


export default ({title,img}) => {
  return (
    <div className={styles.optionCardMain}>
    <img src={img}/>
    <p>{title}</p>
    </div>
  )
}
