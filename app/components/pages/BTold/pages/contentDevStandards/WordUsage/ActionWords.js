import React from 'react'
import PropTypes from 'prop-types'

const ActionWords = (props) => {
  return (
    <div>
      <h2>Action Words</h2>
      <table>
        <tbody>
          <tr>
            <th style={{width: '102px'}}>
              <p>
                <strong>Object</strong>
              </p>
            </th>
            <th style={{width: '120px'}}>
              <p>
                <strong>Action Verb</strong>
              </p>
            </th>
            <th style={{width: '222px'}}>
              <p>
                <strong>Example</strong>
              </p>
            </th>
          </tr>
          <tr>
            <td>
              <p>Check box</p>
            </td>
            <td>
              <p>Select</p>
              <p>Clear</p>
            </td>
            <td>
              <p>Select the <strong>Match</strong> check box.</p>
              <p>Clear the <strong>Match</strong> check box.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Button</p>
            </td>
            <td>
              <p>Click</p>
            </td>
            <td>
              <p>Click <strong>Save</strong>.</p>
              <p>Click the <strong>Match Validation</strong> button.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Folder</p>
            </td>
            <td>
              <p>Click</p>
              <p>Double-click</p>
            </td>
            <td>
              <p>Click the <strong>My Documents</strong> folder to select....</p>
              <p>Double-click the <strong>My Documents</strong> folder to open.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Icon</p>
            </td>
            <td>
              <p>Click</p>
            </td>
            <td>
              <p>Click the <strong>AuthorIT</strong> icon to access the content management solution.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Link</p>
            </td>
            <td>
              <p>Click</p>
            </td>
            <td>
              <p>Click the <strong>Logout</strong> link.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Menu option</p>
            </td>
            <td>
              <p>Click</p>
              <p>Point to</p>
            </td>
            <td>
              <p>Click <strong>File &gt; Open</strong>.</p>
              <p>From the <strong>Tools</strong> menu, point to <strong>Variables</strong>, then click <strong>List</strong>.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Search</p>
            </td>
            <td>
              <p>Click</p>
            </td>
            <td>
              <p>Click <strong>Search</strong>.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Tab</p>
            </td>
            <td>
              <p>Select</p>
            </td>
            <td>
              <p>Select the <strong>Events</strong> tab.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Text
              </p>
            </td>
            <td>
              <p>Select</p>
            </td>
            <td>
              <p>Select and highlight the terms of the contract. Press <strong>Ctrl+C</strong> to copy.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Field (text box, radio/option button, drop-down list, etc.)</p>
            </td>
            <td>
              <p>Select</p>
            </td>
            <td>
              <p>On the Font tab, select an <strong>Effect</strong> to apply to the text. </p>
              <p>Click <strong>Insert &gt; Break</strong> and select a <strong>Break</strong> type. Click <strong>OK</strong>.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Window, page, dialog box</p>
            </td>
            <td>
              <p>Click in</p>
            </td>
            <td>
              <p>Click in the <strong>People Search Results</strong> page to select....</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ActionWords
