import React, { useState } from "react";
import styles from "./Safety.module.scss";
import pc from "../../assets/image/pc.png";
import TitleCard from "../../components/titleCard";
import tik from "../../assets/image/tik.png";
import { Col, Layout, Row } from "antd";

const Safety = () => {
  // const name = "ali"
  const [name, setName] = useState(false);
  // const [age, setAge] = useState(10)

  // setName("abol")

  // function handleAge() {
  //   setAge(22)
  // }

  // function changeName() {
  //   setName(true)
  // }

  //useEffect
  // useEffect(() => {
  //   handleAge()
  // }, [])

  return (
    <>
      <div className={styles.SafetyMain}>
        <div className={styles.titr}>
          <h1>نگران امنیت وب‌سایت‌تان باشید!</h1>
          {/* <Space wrap>
          <Button onClick={changeName} type="primary" danger={true} loading={name}>Primary Button</Button>
          <Button>Default Button</Button>
        </Space> */}

          <p className={styles.titr2}>
            تنسی سرور با ابزارهای روزآمد؛ سیاست‌های امنیتی استاندارد؛
            سخت‌افزارهای امنیتی برتر؛ حداکثر امنیت را برای شما به ارمغان می‌آورد
          </p>
        </div>
        <div className={styles.handleCard}>
          <Row className={styles.cartes} justify="center" align="middle" gutter={[35, 10]}>
            <Col className="gutter-row" span={12}>
              <TitleCard  img={tik} title="سخت افزاری و نرم افزاری Anti DDos سرویس های"/>
            </Col>
            <Col className="gutter-row" span={12}>
              <TitleCard title={"لایسنس های امنیتی اورجینال شامل SSL و آنتی شامل"}/>
            </Col>
            <Col className="gutter-row" span={12}>
              <TitleCard title="کانفیگ های امنیتی برای جلوگیری از حملات"/>
            </Col>
            <Col className="gutter-row" span={12}>
              <TitleCard title="مشاوره جهت مدیریت ریسک و امنیت سرورها"/>
            </Col>
          </Row>

          <div className={styles.titrpic}>
            <img src={pc} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Safety;
