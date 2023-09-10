// import React from 'react'
import "./Navbar.scss";
import Logo from "../../assets/image/Logo.png";

const Navbar = () => {
  
  const handleUser = () => {
    console.log("khiarrrrrrrrrrrrrr");
  }
  return (
    <div className="Navbar">
      <ul className="nav">
        <li>
          <img src={Logo} />
        </li>
        <li>
          <a>سرور اختصاصی</a>
        </li>
        <li>
          <a>سرور مجازی</a>
        </li>
        <li>
          <a>دیگر خدمات</a>
        </li>
        <li>
          <a>ارتباط با ما</a>
        </li>
      </ul>
      <div className="login">
        <button className="poshtibani">پشتیبانی</button>
        <button className="hesab" onClick={handleUser}>حساب کاربری</button>
      </div>
    </div>
  );
};

export default Navbar;
