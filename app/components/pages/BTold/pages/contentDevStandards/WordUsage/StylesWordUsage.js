import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const StylesWordUsage = (props) => {
  return (
    <div>
      <h2>Styles and Word Usage</h2>
      <table>
        <tbody>
          <tr>
            <th style={{width: '102px'}}>
              <p>
                <strong>Use</strong>
              </p>
            </th>
            <th style={{width: '102px'}}>
              <p>
                <strong>Don't Use</strong>
              </p>
            </th>
            <th style={{width: '240px'}}>
              <p>
                <strong>Example or Comment</strong>
              </p>
            </th>
          </tr>
          <tr>
            <td>
              <p>drop-down</p>
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
              <p>email</p>
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
              <p>click the xx button</p>
            </td>
            <td>
              <p>click on the xx button</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>
                  <strong>Title</strong>
                  – this is used...</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <strong>Title:</strong>
                  this is used...</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <strong>Status</strong>
                  – Select to change Active contacts to Inactive status.
                </li>
                <li>
                  <strong>Billing Contact</strong>
                  – Select to indicate that this contact is the billing contact.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>Log on to</p>
            </td>
            <td>
              <p>Log in to</p>
            </td>
            <td>
              <p>Also don't use: Log in, Login, Log onto, or Sign in</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Log off from</p>
            </td>
            <td>
              <p>Log off of</p>
            </td>
            <td>
              <p>Also don't use: Logout or Sign off</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Button</p>
            </td>
            <td>
              <p>Icon</p>
            </td>
            <td>
              <p>When referencing an image in an application that is clicked to run a command.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Icon</p>
            </td>
            <td>
              <p>Button</p>
            </td>
            <td>
              <p>When referencing an image that is clicked to launch an application.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>sub-tab</p>
            </td>
            <td>
              <p>sub tab</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>screen</p>
            </td>
            <td>
              <p>page</p>
            </td>
            <td>
              <p>When referring to the pc monitor.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>page</p>
            </td>
            <td>
              <p>screen</p>
            </td>
            <td>
              <p>When referring to documents/ information making up a website or application.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>display, displays, will be displayed</p>
            </td>
            <td>
              <p>load, appear</p>
            </td>
            <td>
              <p>Click the xx button to display the xyz page.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>toolbar</p>
            </td>
            <td>
              <p>menu</p>
            </td>
            <td>
              <p>The toolbar is located at the top or the window and contains buttons to perform actions or provide drop-down menus.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>option button</p>
            </td>
            <td>
              <p>radio button</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>that is, namely</p>
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
              <p>for example</p>
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
              <p>pop-up</p>
            </td>
            <td>
              <p>pop up</p>
            </td>
            <td>
              <p>However, ALWAYS use the same spelling/style as used in the application.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>text box
              </p>
            </td>
            <td>
              <p>textbox</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Web</p>
            </td>
            <td>
              <p>web</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>website</p>
            </td>
            <td>
              <p>Website</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Internet</p>
            </td>
            <td>
              <p>internet</p>
            </td>
            <td>
              <p>*per AP and RHI style</p>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default StylesWordUsage
