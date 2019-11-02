import React from "react";
import './Detail.css'

export default ({ detail }) =>
  <div>
    <div className="head-title d-none d-sm-block">
      มาตรการส่งเสริมการบริโภค <br />
      ในประเทศ
      <span className="nowrap">“ชิมช้อปใช้”</span>
    </div>
    <div className="head-title d-sm-none">
      มาตรการส่งเสริมการบริโภคในประเทศ
      <span className="nowrap">“ชิมช้อปใช้”</span>
    </div>
    <div className="detail" dangerouslySetInnerHTML={{ __html: detail }} />
  </div>
