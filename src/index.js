import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import WhatDoYouDo from './views/what-do-you-do'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={WhatDoYouDo} exact path="/what-do-you-do" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
