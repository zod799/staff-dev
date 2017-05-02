import React from 'react'
import PropTypes from 'prop-types'

const SelectChoose = (props) => {
  return (
    <div>
      <h2>Select vs. Choose</h2>
      <table>
        <tbody>
          <tr>
            <th style={{width: '312px'}}>
              <p>Examples of When to Use Select</p>
            </th>
            <th style={{width: '324px'}}>
              <p>Examples of When to Use Choose</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>From the
                <strong>Tools</strong>
                menu, select
                <strong>Options</strong>.</p>
              <p>Select the
                <strong>Drop shadow</strong>
                check box.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
          </tr>

        </tbody>
      </table>
      <h4>Select</h4>
      <p>Word choices: select, selected, selection</p>
      <p>Use to refer to marking text, cells, and similar items that will be subject to a user action, such as copying text. Items so marked are called the selection or selected. Also, use to refer to dialog box options if you are documenting both keyboard and mouse use and to check boxes in all documentation. If you are documenting use of the mouse only, use click in these circumstances, except for check boxes.</p>
      <p>In most programs, use select, not highlight, because selecting is a standard procedure, whereas highlighting could cause confusion in many programs.</p>
      <p className='note'>Microsoft Manual of Style topic: select, selected, selection</p>

      <h4>Choose</h4>
      <p>Word choices: choose, chosen, choosing</p>
      <p>In general, use click or double-click instead of choose for commands and buttons that carry out commands.</p>
      <p className='note'>Microsoft Manual of Style topic: choose</p>
    </div>
  )
}

export default SelectChoose
