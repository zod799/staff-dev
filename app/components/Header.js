import React from 'react'
import {NavLink} from 'react-router-dom'
// import NavMain from './NavMain'
import Routes from '../config/routes.js'

class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  toggleNavIcon () {
    let elem = document.getElementById('app')
    elem.classList.toggle('change')
  }

  getHashLocation () {
    let loc = window.location.hash
    return loc.slice(1)
  }

  getHeaderColor () {
    let loc = this.getHashLocation()

    let x = ''
    for (let key in Routes) {
      if (Routes.hasOwnProperty(key)) {
        if (Routes[key].path === loc) {
          x = Routes[key]
        } else {
          let currPath = loc.substr(1)
          if (Routes[key].path.substr(1) === currPath.split('/')[0]) {
            x = Routes[key]
          }
        }
      }
    }

    return x.bgcolor
  }

  render () {
    return (
      <header className='clearfix' style={{backgroundColor: this.getHeaderColor()}}>
        <div id='menu-toggle' className='menu-toggle' onClick={this.toggleNavIcon}>
          <div className='bar1' />
          <div className='bar2' />
          <div className='bar3' />
        </div>

        <h1>Staff Development Resources</h1>
        <nav id='mainNav'>
          <ul>
            <li><NavLink exact to='/' activeClassName='selected' activeStyle={{backgroundColor: '#E4D100'}}>Mission</NavLink></li>
            <li>
              <NavLink to='/navigating-rh' activeClassName='selected' activeStyle={{backgroundColor: '#00BBF8'}}>
                Navigating RH
              </NavLink>
              <ul style={{backgroundColor: '#00BBF8'}}><li><NavLink to='/navigating-rh/bobnet' activeClassName='selected'>BobNet</NavLink></li></ul>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
