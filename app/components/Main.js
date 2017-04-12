import React from 'react'
import {Route} from 'react-router-dom'
import Mission from './pages/Mission/Mission'
import NavigatingRH from './pages/NavigatingRH/NavigatingRH'
import Bobnet from './pages/NavigatingRH/pages/Bobnet'

class Main extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <main>
        <Route exact path='/' component={Mission} />
        <Route path='/navigating-rh' component={NavigatingRH} />
        <Route path='/navigating-rh/bobnet' component={Bobnet} />
      </main>
    )
  }
}

export default Main
