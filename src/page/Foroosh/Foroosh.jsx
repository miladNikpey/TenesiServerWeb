// import React from 'react'
import "./Foroosh.scss";
import server from "../../assets/image/server.png";
import Card from "../../components/card";
import TitleCard from "../../components/titleCard";
import OptionCard from "../../components/optionCard";
import service from "../../assets/image/service.png";
import mizbani from "../../assets/image/mizbani.png";

const Foroosh = () => {
  var desc = "sssssssssss";

  return (
    <div>
      <div className="background">
        <div className="carts">
          <div className="matn2">
            <p className="titr">به دنبال میزبانی حرفه ای و مطمئن هستید؟</p>
            <p className="titr2">
              .با سرویس های میزبانی ایران سرور با خیال راحت به توسعه کسب و
              کارتان بپردازید
            </p>
          </div>
        </div>
        <div className="cartz">
          {/* <div className="cart1">
            <div className="akscart">
              <img className="aksz" src={server} />
              <div className="matnz">
                <p className="host">هاست اشتراکی</p>
              </div>
              <div className="nasb">
                <p>
                  نصب رایگان سیستم مدیریت سایت برای اطمینان بیشتر RAID سیستم
                  کنترل‌پنل مدیریت هاست
                </p>
              </div>
            </div>
          </div> */}
          <Card
            desc="نصب رایگان سیستم مدیریت سایت
برای اطمینان بیشتر RAID سیستم
کنترل‌پنل مدیریت هاست"
            title="هاست اشتراکی"
            img={server}
          />
          <Card
          title="هاست اشتراکی"
            desc="نصب رایگان سیستم مدیریت سایت
            برای اطمینان بیشتر RAID سیستم
            کنترل‌پنل مدیریت هاست"
            img={server}
          />
          <Card
          title="هاست اشتراکی"
            desc="نصب رایگان سیستم مدیریت سایت
            برای اطمینان بیشتر RAID سیستم
            کنترل‌پنل مدیریت هاست"
            img={server}
          />
        </div>
      </div>
    </div>
  );
};

export default Foroosh;
