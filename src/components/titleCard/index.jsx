/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import styles from "./titleCard.module.scss";
import tik from '../../assets/image/tik.png'

// eslint-disable-next-line react/prop-types
export default ({title}) => {
  return (
    <div className={styles.titleCardMain}>
        <img src={tik}/>
      <p>{title}</p>
    </div>
  );
};
