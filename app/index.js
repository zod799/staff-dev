import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import App from './config/App'
import '../node_modules/normalize.css'
import './index.css'

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'))
