import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { Home } from "./page";
import { Navbar } from './component';

const initialContent = {
  navbarItems: [],
  duration: "",
  detail: "",
  condition: "",
}

export default () => {
  const [content, setContent] = useState(initialContent)
  const { navbarItems } = content

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch("https://panjs.com/ywc.json")
      setContent(await resp.json())
    }
    loadData()
  }, [])


  return <Router>
    <Navbar items={navbarItems}>
      <Switch>
        <Route path="/">
          <Home {...content} />
        </Route>
      </Switch>
    </Navbar>
  </Router>
}
