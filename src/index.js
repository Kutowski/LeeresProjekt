import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <h1>Hallo</h1>
      <h2>Dies ist ein leeres Projekt mit React-Router-Dom V4</h2>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,
  rootElement,
)
