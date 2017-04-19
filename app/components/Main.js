import React from 'react'
import {Route} from 'react-router-dom'
import Routes from '../config/routes.js'

class Main extends React.Component {
  constructor () {
    super()
    this.Routes = Routes
  }
  getRoutes () {
    return (
      this.Routes.map((item, i) => {
        if (item.routes && item.routes.length > 0) {
          return (
            <div key={i}>
              <Route exact={item.exact} path={item.path} component={item.component} />
              {this.getSubRoutes(item.routes)}
            </div>
          )
        } else {
          return (<Route key={i} exact={item.exact} path={item.path} component={item.component} />)
        }
      })
    )
  }
  getSubRoutes (routes) {
    return (
      routes.map((subitem, i) => {
        return (
          <Route key={i} exact={subitem.exact} path={subitem.path} component={subitem.component} />
        )
      })
    )
  }

  render () {
    return (
      <main>
        {this.getRoutes()}
      </main>
    )
  }
}

export default Main
