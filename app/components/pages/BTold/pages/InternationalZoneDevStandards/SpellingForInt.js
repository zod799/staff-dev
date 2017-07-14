import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const SpellingForInt = (props) => {
  return (
    <div>
      <h2>Spelling for International English</h2>
      <p>The following table lists common spelling differences between American and International English. If in any doubt about a spelling, look it up.</p>
      <p className='note'><strong>Tip:</strong> the Oxford English Dictionary (OED) provides both UK and American spellings. However, the online version is only available by paid subscription.</p>
      <table style={{width: '606px'}}>
        <tbody>
          <tr>
            <th style={{width: '138px'}}>
              <p>US</p>
            </th>
            <th style={{width: '150px'}}>
              <p>UK</p>
            </th>
            <td className='clearCol' style={{width: '12px'}}>
              <p>&nbsp;</p>
            </td>
            <th style={{width: '156px'}}>
              <p>US</p>
            </th>
            <th style={{width: '150px'}}>
              <p>UK</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>customize</p>
            </td>
            <td>
              <p>customise</p>
            </td>
            <td className='clearCol'>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>color</p>
            </td>
            <td>
              <p>colour</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>organize</p>
            </td>
            <td>
              <p>organise</p>
            </td>
            <td className='clearCol'>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>center</p>
            </td>
            <td>
              <p>centre</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>maximize</p>
            </td>
            <td>
              <p>maximise</p>
            </td>
            <td className='clearCol'>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>gray</p>
            </td>
            <td>
              <p>grey</p>
            </td>
          </tr>

        </tbody>
      </table>
      <p>
        <NavLink to='/glossary'>job order record</NavLink>
      </p>
    </div>
  )
}

export default SpellingForInt
