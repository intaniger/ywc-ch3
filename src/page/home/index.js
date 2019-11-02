import React, { Fragment } from "react";
import Banner from "./Banner";
import Duration from "./Duration";
import Detail from "./Detail";
import Condition from "./Condition";
import TAT from "./TAT";
import Participant from "./Participant";
import Footer from "./Footer";

export default ({ duration, detail, condition, navbarItems }) => <Fragment>
  <Banner />
  <Duration duration={duration} />
  <div className="container">
    <div className="box-detail">
      <Detail detail={detail} />
      <Condition condition={condition} />
    </div>
    <div className="box-tat">
      <TAT />
    </div>
    <div className="box-participant">
      <Participant />
    </div>
  </div>
  <Footer items={navbarItems} />
</Fragment>
