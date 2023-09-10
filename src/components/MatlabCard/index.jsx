/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
import React from 'react'
import styles from '../MatlabCard/MatlabCard.module.scss'

export default ({img , title1 , title2}) => {
  return (
    <div className={styles.MatlabCardMain}>
         <img src={img}/>
         <h4>{title1}</h4>
         <h2>{title2}</h2>
    </div>
  )
}