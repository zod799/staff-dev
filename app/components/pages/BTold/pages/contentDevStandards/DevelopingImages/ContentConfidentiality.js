import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const ContentConfidentiality = (props) => {
  return (
    <div>
      <h2>Considering the Content for Confidentiality</h2>
      <p>Before taking a screen shot, consider the contents of the image in regards to security of information and user/candidate confidentiality. Confidential information includes: personal identification numbers (SSN, etc.), phone numbers, resume/CV information, etc.</p>
      <p>If the window/dialog box contains confidential information, insert fake entries as needed.</p>
      <ul>
        <li>Do not save fake entries on live data.</li>
        <li>Use all 5's for numbers and <NavLink to='/content-dev-standards/about-lorem'>Lorem Ipsum</NavLink> to replace Latin-based text.</li>
      </ul>
      <p>If the image contains confidential information, edit the image as needed:</p>
      <ul>
        <li>Blur the information.</li>
        <li>Remove the information.</li>
        <li>Edit the information after taking the screen shot.<br />Use all 5's for numbers and <NavLink to='/content-dev-standards/about-lorem'>Lorem Ipsum</NavLink> to replace Latin-based text.</li>
      </ul>
    </div>
  )
}

export default ContentConfidentiality
