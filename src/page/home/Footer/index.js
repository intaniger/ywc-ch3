import React, { } from "react";
import Info from "./Info";
import Nav from "./Nav";

export default ({ items }) =>
  <footer>
    <Info />
    <Nav items={items} />
  </footer>
