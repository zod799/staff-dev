import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

class ImageSaving extends React.Component {
  accordian (e) {
    e.target.classList.toggle('selected')
  }
  render () {
    return (
      <div>
        <h2>Image Saving Guidelines</h2>
        <ul>
          <li>Save to <strong>GIF</strong> if going into AuthorIt or if intended for online output.</li>
          <li>Save in lowercase letters using hyphens.</li>
          <li>Use <a className='expandItem' onClick={(e) => this.accordian(e)}>standard abbreviations</a> for common screen elements. Refer to the Image Standards topic in the Using AuthorIT for RHI guide for further details.
          <div className='expandingblock'>
            <p>Elements on the screen are described in <NavLink to='/content-dev-standards/documenting-dialog-box'>Documenting Dialog Box and Window Elements</NavLink>.</p>
            <table>
              <tbody>
                <tr>
                  <th style={{width: '155px'}}>
                    <p>
                      <span>Element</span>
                    </p>
                  </th>
                  <th style={{width: '155px'}}>
                    <p>
                      <span>Abbreviation</span>
                    </p>
                  </th>
                  <th style={{width: '155px'}}>
                    <p>
                      <span>Element</span>
                    </p>
                  </th>
                  <th style={{width: '155px'}}>
                    <p>
                      <span>Abbreviation</span>
                    </p>
                  </th>
                </tr>
                <tr>
                  <td>
                    <p>screen</p>
                  </td>
                  <td>
                    <p>scrn</p>
                  </td>
                  <td>
                    <p>window</p>
                  </td>
                  <td>
                    <p>wndw</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>dialog box</p>
                  </td>
                  <td>
                    <p>db</p>
                  </td>
                  <td>
                    <p>field</p>
                  </td>
                  <td>
                    <p>fld</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>button</p>
                  </td>
                  <td>
                    <p>btn</p>
                  </td>
                  <td>
                    <p>&nbsp;</p>
                  </td>
                  <td>
                    <p>&nbsp;</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>For example, the following screen shots would be named as:</p>
            <ul>
              <li><img src={require('./images/11174.gif')} /> is named <strong>btn-calendar</strong></li>
              <li><img src={require('./images/16768.gif')} /> is named <strong>btn-search</strong></li>
              <li><img src={require('./images/23008.gif')} /> is named <strong>fld-admin-selected</strong></li>
            </ul>
            <p />
          </div>
          </li>
          <li>Do not use spaces, underscores, or any other special characters.
            <table className='tableNoBorder' style={{width: '402px'}}>
              <tbody>
                <tr>
                  <td style={{width: '198px'}}>
                    <p>
                      <strong>Correct</strong>
                    </p>
                    <p>snagit-resize-options.gif</p>
                    <p>001-btn-open.gif</p>
                  </td>
                  <td style={{width: '204px'}}>
                    <p>
                      <strong>Incorrect</strong>
                    </p>
                    <p>SnagIt_Resize_Options.png</p>
                    <p>001 open btn.gif</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    )
  }
}

export default ImageSaving
