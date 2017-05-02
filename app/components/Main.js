import React from 'react'
import {Route} from 'react-router-dom'
import Routes from '../config/routes.js'

class Main extends React.Component {
  constructor () {
    super()
    this.Routes = Routes
  }
  getRoutes (r) {
    return (
      r.map((item, i) => {
        if (item.routes && item.routes.length > 0) {
          return (
            <div key={i}>
              <Route exact={item.exact} path={item.path} component={item.component} />
              {this.getRoutes(item.routes)}
            </div>
          )
        } else {
          return (<Route key={i} exact={item.exact} path={item.path} component={item.component} />)
        }
      })
    )
  }

  render () {
    return (
      <main>
        {this.getRoutes(this.Routes)}
      </main>
    )
  }
}

export default Main
