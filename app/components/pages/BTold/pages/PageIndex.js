import React from 'react'
import Routes from '../../../../config/routes.js'
import {NavLink} from 'react-router-dom'

const CatItems = (props) => {
  return (
    <ul>
      {props.links.map((link) => {
        return (
          <li key={link.linkname}><NavLink to={link.path}>{link.linkname}</NavLink></li>
        )
      })}
    </ul>
  )
}

const Categories = (props) => {
  let getIndexList = function (r) { // reformat Routes array for pageindex page
    let routesList = {}
    for (let i = 0; i < Routes.length; i++) {
      routesList[Routes[i].linkname] = Routes[i].path
      if (Routes[i].routes && Routes[i].routes.length > 0) {
        for (let y = 0; y < Routes[i].routes.length; y++) {
          routesList[Routes[i].routes[y].linkname] = Routes[i].routes[y].path
        }
      }
    }
    let sortedArr = Object.keys(routesList).sort()
    let fsortedArr = sortedArr.filter(function (item, pos, ary) {
      return !pos || item.charAt(0) !== ary[pos - 1].charAt(0)
    })
    var newRouteList = []
    for (var item in fsortedArr) {
      let tmpObj = {}
      tmpObj[fsortedArr[item].charAt(0)] = []
      newRouteList.push(tmpObj)
    }

    for (let item in newRouteList) {
      for (let key in newRouteList[item]) {
        for (let k in routesList) {
          var obj = {}
          if (key === k.charAt(0) && k !== 'Index') {
            obj['path'] = routesList[k]
            obj['linkname'] = k
            newRouteList[item][key].push(obj)
          }
        }
      }
    }
    return newRouteList
    /* new format should be:
     * [
     *   {'A': [
     *     {'path': '/Foo', 'linkname': 'Bar'}
     *   ]}
     * ]
     */
  }
  let indexCatList = getIndexList(Routes)
  return (
    <div className='categories'>
      {indexCatList.map((item) => {
        for (let k in item) {
          return (
            <div key={k} className='indexCategory'>
              <h4>{k}</h4>
              <CatItems links={item[k]} />
            </div>
          )
        }
      })}
    </div>
  )
}

class Index extends React.Component {
  render () {
    return (
      <div>
        <h2>Index</h2>
        <Categories />
      </div>
    )
  }
}

export default Index
