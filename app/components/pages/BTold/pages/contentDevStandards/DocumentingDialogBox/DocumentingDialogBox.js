import React from 'react'
import PropTypes from 'prop-types'

const DocumentingDialogBox = (props) => {
  return (
    <div>
      <h2>Documenting Dialog Box and Window Elements</h2>
      <p className='note'>
        <strong>Note:</strong>
        The following text is from the Microsoft Manual of Style from the topic on Dialog Boxes and Property Sheets. Text pertaining to property sheets has been removed/edited out.</p>
      <p>
        <strong>Dialog boxes</strong> contain command buttons and various kinds of options through which users can carry out a particular command or task. For example, in the Save As dialog box, the user must indicate in which folder and under what name the document should be saved. (Toolboxes are simply dialog boxes with graphical options that are treated in the same way as other options.)</p>
      <div>
        <p><img src={require('./images/24863.gif')} /></p>
      </div>
      <p>In general, avoid using the term dialog box if you can.</p>
      <h4>Dialog Box Syntax</h4>
      <p>These terms are most commonly used for user actions in dialog boxes:
      </p>
      <ul>
        <li>
          <strong>Click – </strong>Use for commands, command buttons, option buttons, and options in a list, gallery, or palette.</li>
        <li>
          <strong>Select</strong> and <strong>clear – </strong>Use for check boxes.</li>
        <li>
          <strong>Type</strong> or <strong>select – </strong>Use to refer to an item (as in a list box) that the user can either type or select in the accompanying text box. You can use enter instead if there's no possibility of confusion.</li>
        <li>
          <strong>Choose</strong> and <strong>select – </strong>Use these terms only when documenting generic procedures, not mouse procedures. Use choose for commands and select for options.</li>
      </ul>
      <p>Except for the identifiers box, list, check box, and tab, the generic name of an item within a dialog box (e.g. button, option, etc.) should not follow the item's label, especially within procedures. Check box in particular helps localizers differentiate this item from other option boxes.</p>
      <p>Use bold for dialog box titles, labels, and options.</p>
      <p>The following example shows typical procedure wording for dialog box elements.</p>
      <p>
        <strong>Correct</strong>
      </p>
      <p>
        <strong>To view bookmarks</strong>
      </p>
      <ol>
        <li>On the <strong>Tools</strong> menu, click <strong>Options</strong>, and then click the <strong>View</strong> tab.</li>
        <li>Select the <strong>Bookmarks</strong> check box.</li>
      </ol>
      <h4>Dialog box elements</h4>
      <p>In most documentation, especially for end users, do not differentiate between elements such as drop-down combo boxes, list boxes, and so on. Do use the term check box, however. Use the correct label (for example, Save as type) with the term box or list if necessary to locate where the user should be and then direct the user to click, select, or take other action.</p>
      <p>The following table describes the various elements that can appear in dialog boxes. In general, do not use the name of the particular element in documentation except in reference to designing interfaces. Use lowercase for the name of the element ("the Spaces check box"). In general, use sentence caps for the specific descriptor.</p>
      <p className='note'>
        <strong>Note:</strong> The following table has been pared down to the essentials. Refer to the MMS topic for further details.</p>
      <table>
        <tbody>
          <tr>
            <th style={{width: '132px'}}>
              <p>
                <span>Element</span>
              </p>
            </th>
            <th style={{width: '222px'}}>
              <p>
                <span>Usage</span>
              </p>
            </th>
            <th style={{width: '204px'}}>
              <p>
                <span>Example</span>
              </p>
            </th>
          </tr>
          <tr>
            <td>
              <p>Check box*</p>
            </td>
            <td>
              <p>Select the <strong>Spaces</strong> check box.</p>
              <p>Click to clear the <strong>Bookmarks</strong> check box.</p>
              <p>Select the appropriate check boxes.</p>
              <p className='note'><strong>Note:</strong> Always include check box with the label name.</p>
            </td>
            <td>
              <p><img src={require('./images/24866.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Combo box</p>
            </td>
            <td>
              <p>In the <strong>Font</strong> box, type or select the font you want to use.</p>
              <p>– or –</p>
              <p>In the <strong>File Name</strong> box, enter a file name.</p>
            </td>
            <td>
              <p><img src={require('./images/24867.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Command button</p>
            </td>
            <td>
              <p>Click <strong>Options</strong>.</p>
            </td>
            <td>
              <p><img src={require('./images/24868.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Drop-down arrow</p>
            </td>
            <td>
              <p>Click the <strong>Size</strong> arrow to see more options.</p>
            </td>
            <td>
              <p><img src={require('./images/24869.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Drop-down combo box</p>
            </td>
            <td>
              <p>In the <strong>Size</strong> box, type or select a point size.</p>
            </td>
            <td>
              <p><img src={require('./images/24870.gif')} />
                <img src={require('./images/24871.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Drop-down list box</p>
            </td>
            <td>
              <p>In the <strong>Item</strong> list, click <strong>Desktop</strong>.</p>
            </td>
            <td>
              <p><img src={require('./images/24872.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Group box</p>
            </td>
            <td>
              <p>Click <strong>Small Caps</strong>.</p>
              <p>– or –</p>
              <p>Under <strong>Effects</strong>, click <strong>Small</strong></p>
              <p><strong>Caps</strong>.</p>
              <p>– or –</p>
              <p>In the<strong>Effects</strong>area, click <strong>Small Caps</strong>.</p>
            </td>
            <td>
              <p><img src={require('./images/24873.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Label</p>
              <p>(do not use caption)</p>
            </td>
            <td>
              <p>In the <strong>Font</strong> list, click <strong>Arial</strong>.</p>
            </td>
            <td>
              <p><img src={require('./images/24874.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>List box</p>
            </td>
            <td>
              <p>In the <strong>Wallpaper</strong> list, click the background wallpaper of your choice.</p>
            </td>
            <td>
              <p><img src={require('./images/24875.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Option button</p>
              <p>(avoid radio button)</p>
            </td>
            <td>
              <p>Click <strong>Portrait</strong>.</p>
            </td>
            <td>
              <p><img src={require('./images/24876.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Slider*</p>
              <p>(also called trackbar control in some technical documentation)</p>
            </td>
            <td>
              <p>Move the slider to the right to increase the volume.</p>
            </td>
            <td>
              <p><img src={require('./images/24877.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Spin box</p>
              <p>(do not use spinner or other labels)</p>
            </td>
            <td>
              <p>In the <strong>Date</strong> box, type or select the part of the date you want to change.</p>
            </td>
            <td>
              <p><img src={require('./images/24878.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Tab*</p>
              <p>(also called tabbed page in technical documentation)</p>
            </td>
            <td>
              <p>On the <strong>Tools</strong> menu, click <strong>Options</strong>, and then click the <strong>View</strong> tab.</p>
              <p className='note'><strong>Note:</strong> Always include tab with the label name.</p>
            </td>
            <td>
              <p><img src={require('./images/24879.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Text box</p>
            </td>
            <td>
              <p>In the <strong>Size</strong> box, select 10 or type a new font size.</p>
              <p>In the <strong>Size</strong> box, enter a font size.</p>
              <p className='note'><strong>Note:</strong> You can use enter if there's no chance of confusion.</p>
            </td>
            <td>
              <p><img src={require('./images/24880.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Title</p>
              <p>(do not use caption)</p>
            </td>
            <td>
              <p>In the <strong>Options</strong> dialog box, click the <strong>View</strong> tab.</p>
            </td>
            <td>
              <p><img src={require('./images/24881.gif')} /></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Unfold button</p>
            </td>
            <td>
              <p>Click <strong>Profiles</strong> for more information.</p>
            </td>
            <td>
              <p><img src={require('./images/24882.gif')} /></p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>* Check box, tab, and slider are the only terms in this table that should typically be used in end-user documentation.</p>
    </div>
  )
}

export default DocumentingDialogBox
