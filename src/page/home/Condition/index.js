import React, { } from "react";
import './Condition.css'

export default ({ condition }) =>
  <div className="mt-4">
    <div className="title">เงื่อนไขการเข้าร่วมมาตรการ</div>
    <div className="detail ul mt-2" dangerouslySetInnerHTML={{ __html: condition }} />
  </div>
