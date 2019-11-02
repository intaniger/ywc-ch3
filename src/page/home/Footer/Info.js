import React, { } from "react";
import './Info.css'

export default ({ }) =>
  <div className="info">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <img className="logo" src="/assets/img/footer.png" alt="logo" />
        </div>
        <div className="col-md-3 col-sm-4 col-xs-12">
          <div className="head">ข้อมูลลงทะเบียนประชาชน</div>
          <div className="detail">การรับสิทธิ การใช้งานแอปพลิเคชั่น <span className="nowrap">“เป๋าตัง”</span> และ <span className="nowrap">“ถุงเงิน”</span></div>
          <div className="detail">ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.<a className="ml-1" href="tel:021111144"><span className="nowrap">0 2111 1144</span></a></div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-12">
          <div className="head">ข้อมูลลงทะเบียนผู้ประกอบการ</div>
          <div className="detail">เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
          <div className="detail">ติดต่อ โทร.<a className="ml-1" href="tel:022706400"><span className="nowrap">0 2270 6400 กด 7</span></a></div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-12">
          <div className="head">ข้อมูลเที่ยวชิมช้อปใช้</div>
          <div className="detail">ติดต่อ ททท.</div>
          <div className="detail">โทร<a className="ml-1" href="tel:1672"><span>1672</span></a></div>
        </div>
      </div>
    </div>
  </div>
