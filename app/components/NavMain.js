import React from 'react'
import {NavLink} from 'react-router-dom'

const NavMain = (props) => (
  <nav>
    <ul id='mainNav'>
      <li><NavLink to='/'>Main</NavLink></li>
      <li><NavLink to='/home' activeClassName='selected colorRed' activeStyle={{color: '#900'}}>HomeLink</NavLink></li>
    </ul>
  </nav>
)

export default NavMain
