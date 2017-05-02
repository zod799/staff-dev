import React from 'react'
import PropTypes from 'prop-types'

const DocumentingToolbar = (props) => {
  return (
    <div>
      <h2>Documenting the Toolbar</h2>
      <p className='note'>
        <strong>Note:</strong>
        The following text is from the Microsoft Manual of Style from the topic on Toolbar. Text has been edited for brevity.
      </p>
      <p>Toolbar is the standard term for the various rows below the menu bar that contain buttons and commands for commonly used tasks. Do not use command bar except in technical documentation.</p>
      <p>The main toolbar that is on by default and contains buttons for basic tasks, such as opening and printing a file, is called the "standard toolbar." Some programs also have a formatting toolbar that is on by default. Other toolbars can be turned on, usually by clicking Toolbars on the View menu.</p>
      <p>In procedures, do not mention the name of a toolbar that is on by default.</p>

      <p><strong>Correct</strong></p>
      <ol>
        <li>Select the words you want to format as bold, and then click <strong>Bold</strong>.</li>
        <li>On the <strong>Drawing</strong> toolbar, click <strong>Insert WordArt</strong>.</li>
      </ol>

      <p><strong>Incorrect</strong></p>
      <ol>
        <li>On the standard toolbar, click <strong>Bold</strong>.</li>
      </ol>
    </div>
  )
}

export default DocumentingToolbar
