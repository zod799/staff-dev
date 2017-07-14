import React from 'react'
import PropTypes from 'prop-types'

const ScreenCapture = (props) => {
  return (
    <div>
      <h2>Screen Capture Guidelines</h2>
      <ul>
        <li>Only include the pointer if it is pointing to/out or indicating some action on the screen.</li>
        <li>Avoid including the cursor.</li>
        <li>Take and save screen captures at 96dpi (this is the default SnagIt setting; if editing in Photoshop, make sure resolution is set at 96).</li>
      </ul>
    </div>
  )
}

export default ScreenCapture
