import React, { } from "react";
import './Nav.css'

export default ({ items = [
  {
    "label": "loading",
    "href": "#"
  }
] }) =>
  <div className="nav-footer">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="copyright">Copyright © 2003-2019</div>
        </div>
        <div className="row col-sm-12 col-md-9 col-lg-9">
          <ul className="nav col-sm-12">
            {
              items.map(
                (item, index) =>
                  <li className="col-sm-4 col-md-4 col-lg-4 nav-item" key={`nav-mobile-${index}`}>
                    <a className="nav-link" href={item.href} target="_blank">
                      {item.label}
                    </a>
                  </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  </div>
