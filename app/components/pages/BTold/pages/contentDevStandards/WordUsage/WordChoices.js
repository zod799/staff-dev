import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const WordChoices = (props) => {
  return (
    <div>
      <h2>Word Choices</h2>
      <table>
        <tbody>
          <tr>
            <th style={{width: '180px'}}>
              <p>
                <strong>Term to Use</strong>
              </p>
            </th>
            <th style={{width: '108px'}}>
              <p>
                <strong>Don't Use</strong>
              </p>
            </th>
            <th style={{width: '282px'}}>
              <p>
                <strong>Example</strong>
              </p>
            </th>
          </tr>
          <tr>
            <td>
              <p>
                <strong>set up</strong>
              </p>
              <p>as a verb</p>
            </td>
            <td>
              <p>setup</p>
            </td>
            <td>
              <p>Have everything unpacked before you set up your computer.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>setup</strong>
              </p>
              <p>as a noun or adjective</p>
            </td>
            <td>
              <p>setup</p>
            </td>
            <td>
              <p>As a noun: Your office setup should be ergonomically designed.</p>
              <p>As a noun: Run Setup before you open other programs.</p>
              <p>As an adjective: The setup time should be about 15 minutes.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>look up</strong>
              </p>
              <p>as a verb</p>
            </td>
            <td>
              <p>lookup</p>
            </td>
            <td>
              <p>Click the
                <strong>Search</strong>
                button to look up contracts.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>lookup</strong>
              </p>
              <p>as a noun or adjective</p>
            </td>
            <td>
              <p>look up</p>
            </td>
            <td>
              <p>The Lookup feature allows you to quickly search for and select additional LOBs.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>web site</strong>
              </p>
              <p>two words</p>
            </td>
            <td>
              <p>website</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>check box</strong>
              </p>
              <p>two words</p>
            </td>
            <td>
              <p>checkbox</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>button</strong>
              </p>
              <p>any image that is clicked to perform some function; may have words or may have a picture</p>
            </td>
            <td>
              <p>do not use icon</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>icon</strong>
              </p>
              <p>the shortcut on a computer desktop that launches an application</p>
            </td>
            <td>
              <p>button</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Internet</strong>
              </p>
            </td>
            <td>
              <p>internet</p>
            </td>
            <td>
              <p>This follows AP and RHI style standards.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>log in</strong>
              </p>
              <p>
                <strong>log in to</strong>
              </p>
            </td>
            <td>
              <p>login</p>
              <p>log into</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>screen</strong>
              </p>
              <p>referring to the computer monitor</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>that is</strong>
              </p>
            </td>
            <td>
              <p>i.e.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>for example</strong>
              </p>
            </td>
            <td>
              <p>e.g.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>window</strong>
              </p>
              <p>the window in which the application resides</p>
            </td>
            <td>
              <p>screen</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>page</strong>
              </p>
              <p>documents/information making up a website or application</p>
            </td>
            <td>
              <p>window</p>
              <p>screen</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>dialog box</strong>
              </p>
              <p>secondary windows in an application in which to choose options for a command or task</p>
            </td>
            <td>
              <p>window</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>email</strong>
              </p>
            </td>
            <td>
              <p>
                <NavLink to='/glossary'>e-mail</NavLink>
              </p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>drop-down</strong>
              </p>
            </td>
            <td>
              <p>drop down</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>click</strong>,
                <strong>double-click</strong>,
                <strong>right-click</strong>
              </p>
              <p>when referring to mouse usage for a selection, option, command, or feature/function activation in an application</p>
            </td>
            <td>
              <p>click on</p>
              <p>double click (on)</p>
              <p>right click (on)</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WordChoices
