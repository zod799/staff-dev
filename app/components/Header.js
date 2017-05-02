import React from 'react'
import {NavLink} from 'react-router-dom'
// import NavMain from './NavMain'
import Routes from '../config/routes.js'

class Header extends React.Component {
  constructor () {
    super()
    this.Routes = Routes
  }

  toggleNavIcon () {
    let elem = document.getElementById('app')
    elem.classList.toggle('change')
  }

  getHashLocation () {
    let loc = window.location.hash
    return loc.slice(1)
  }

  getRouteInfo () {
    let loc = this.getHashLocation()
    for (let key in Routes) {
      if (Routes.hasOwnProperty(key)) {
        if (Routes[key].path === loc) {
          return Routes[key]
        } else {
          let currPath = loc.substr(1)
          if (Routes[key].path.substr(1) === currPath.split('/')[0]) {
            return Routes[key]
          }
        }
      }
    }
  }

  getHeaderTitle () {
    let rinfo = this.getRouteInfo()
    return (rinfo !== null && rinfo !== undefined) ? rinfo.title : 'Staff Development Resources'
  }

  getHeaderColor () {
    let rinfo = this.getRouteInfo()
    return (rinfo !== null && rinfo !== undefined) ? rinfo.bgcolor : '#aaa'
  }

  menuList (r) {
    return (
      r.map((item, i) => {
        if (item.routes && item.routes.length > 0) {
          return (
            <li key={i}><NavLink to={item.path} className='hasSublist' activeClassName='selected' activeStyle={{backgroundColor: item.bgcolor}}>{item.linkname}</NavLink>
              <ul className='subList' style={{backgroundColor: item.bgcolor}}>
                {this.menuList(item.routes)}
              </ul>
            </li>
          )
        } else {
          return (
            <li key={i}><NavLink exact={item.exact} to={item.path} activeClassName='selected' activeStyle={{backgroundColor: item.bgcolor}}>{item.linkname}</NavLink></li>
          )
        }
      })
    )
  }

  render () {
    return (
      <header className='clearfix' style={{backgroundColor: this.getHeaderColor()}}>
        <div id='menu-toggle' className='menu-toggle' onClick={this.toggleNavIcon}>
          <div className='bar1' />
          <div className='bar2' />
          <div className='bar3' />
        </div>

        <h1>{this.getHeaderTitle()}</h1>
        <nav id='mainNav'>
          <ul>
            {this.menuList(this.Routes)}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
