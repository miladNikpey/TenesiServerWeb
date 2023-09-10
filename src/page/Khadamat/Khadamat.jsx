import React from "react";
import OptionCard from "../../components/optionCard"
import styles from "./Khadamat.module.scss";
import service from '../../assets/image/service.png'
import mizbani from '../../assets/image/mizbani.png'
import admin from '../../assets/image/admin.png'
import download from '../../assets/image/download.png'
import govahi from '../../assets/image/govahi.png'
import linsens from '../../assets/image/linsens.png'


const Khadamat = () => {
  return (
    <div>
      <div className={styles.khadamatHandle}>
      <div className={styles.titr}>
        <h1 className={styles.titr1}>دیگر خدمات تنسی سرور</h1>
        <p className={styles.titr2}>
          با سرویس های میزبانی ایران سرور با خیال راحت به توسعه کسب و کارتان
          بپردازید
        </p>
      </div>
      <div className={styles.carts}>
      <OptionCard title="سرویس های ارزی" img={service}/>
      <OptionCard title="میزبانی ایمیل" img={mizbani}/>
      <OptionCard title="مدیریت سرور" img={admin}/>
      <OptionCard title="هاست دانلود" img={download}/>
      <OptionCard title="ssl گواهی نامه" img={govahi}/>
      <OptionCard title="لایسنس" img={linsens}/>
      </div>
      </div>
    </div>
  );
};

export default Khadamat;
