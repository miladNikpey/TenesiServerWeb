// import React from 'react'
import './Landing.scss'
import aksLanding from '../../assets/image/aksLanding.png'
import zarebin from '../../assets/image/zarebin.png'
const Landing = () => {
  return (
    <div>
        <div className='aksLanding'>
        <img src={aksLanding}/>
        </div>
        <div className='matn'>
        <div className='matn-1'>
            <p>با پشتیبانی حرفه ای نزدیک به دو دهه در کنار شما هستیم</p>
        </div>
        <div className='matn-2'>
            <p>کسب و کار آنلاین خود را با ثبت یک دامنه شروع کنید</p>
        </div>
        </div>
        <div className='jostejoo'>
        <div className='searchbar'>
        <input className='search2' type="text" placeholder='نام دامنه را برای ثبت یا انتقال وارد کنید'/>
          <button className='dokme'><img className='zarebin' src={zarebin} /></button>
        </div>

        </div>


        
    </div>
  )
}

export default Landing