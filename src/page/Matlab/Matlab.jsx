// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "../Matlab/Matlab.module.scss";
import MatlabCard from "../../components/MatlabCard";
import word from "../../assets/image/word.png";
import Ai from "../../assets/image/Ai.png";
import ppal from "../../assets/image/ppal.png";
import sms from "../../assets/image/sms.png";
import axios from "axios";

const Matlab = () => {
  const [title, setTitle] = useState();
  const [allData, setAllData] = useState([]);


  const getData = async () => {
    
    const response = await axios.get('https://api.storerestapi.com/products');
    setAllData(response.data.data);
   
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, [])
  

  

  return (
    <div className={styles.handleCard}>
      {allData?.map((p) => (
        <MatlabCard
        key={p?._id}
        title1={p?.title}
        title2={p?.category.name}
        img={word}
        />
      ))}
    </div>
  );
};

export default Matlab;
