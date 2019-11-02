import React, { Fragment, useState } from "react";
import './index.css'

export default ({
  children,
  items = [
    {
      "label": "loading",
      "href": "#"
    }
  ]
}) => {
  const [hamburgerClass, setHamburgerClass] = useState('')
  // const [collapseState, setCollapseState] = useState(0)

  const onHamburgerClick = () => {
    setHamburgerClass(hamburgerClass === 'open' ? '' : 'open')
    // setCollapseState((collapseState + 1) % 3)
  }
  return <Fragment>
    <header>
      <div className="header-link-mobile">
        <nav className="navbar navbar-light amber lighten-4">
          <a className="navbar-brand">
            <img alt="ชิม ช็อป ใช้" src='/assets/img/footer.png' />
          </a>
          <button className="navbar-toggler first-button" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            onClick={onHamburgerClick}
          >
            <div className={`animated-icon1 ${hamburgerClass}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              {
                items.map(
                  (item, index) =>
                    <li className="nav-item" key={`nav-mobile-${index}`}>
                      <a className="nav-link" href={item.href} target="_blank">{item.label}</a>
                    </li>
                )
              }
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row full-screen">
          <div className="col-12">
            <ul className="header-links">
              {
                items.map(
                  (item, index) =>
                    <li key={`nav-mobile-${index}`}>
                      <a href={item.href} target="_blank">{item.label}</a>
                    </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
    {children}
  </Fragment>
}
