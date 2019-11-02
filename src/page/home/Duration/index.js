import React, { } from "react";
import "./Duration.css"


export default ({ duration }) =>
  <div className="box-register">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="since">ตั้งแต่วันที่</div>
        </div>
        <div className="col-12">
          <div className="time">{duration}</div>
        </div>
        <div className="col-12">
          <button className="btn register">
            ลงทะเบียน เฟส 2<br />
            ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น. <br />
            (จำกัดผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
              </button>
          <hr />
        </div>
      </div>
    </div>
  </div>
