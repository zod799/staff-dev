import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const ImageEditing = (props) => {
  return (
    <div>
      <h2>Image Editing Guidelines</h2>
      <p > Always keep the user in mind. </p>
      <ul>
        <li>Parts of screens and callouts on whole screens can be used to indicate specific steps that a user must take.</li>
        <li>The pointer and the use of directional arrows help to draw the user's eye to a specific item on the image.</li>
        <li>Fading out or blurring background items decreases the importance of these items and helps to keep the user on task. </li>
        <li>When editing images, make sure the resolution is set to 96dpi for online output. Note that SnagIt automatically takes screen captures at this resolution.</li>
      </ul>
      <p><strong>Callout Guidelines</strong></p>
      <p>Use one of the following two types of callouts:</p>
      <ul>
        <li><strong>Rectangle or square box</strong> with square corners, in Dark Blue (RGB = 0 51 91), 1px border <br />Optional color for callout box is Black (RGB = 0 0 0) or White (RGB = 255 255 255); use when callout box color is too close to the color of the image.</li>
        <li><strong>Pieces of a dialog box (fields, panes, etc.)</strong> with a black, 1px border</li>
      </ul>
      <p>Use the following formats for callouts:</p>
      <ul>
        <li>Drop shadow using <NavLink to='/content-dev-standards/developing-images/snagit-callout-settings'>SnagIt</NavLink> or <NavLink to='/content-dev-standards/developing-images/photoshop-callout-settings'>Photoshop</NavLink>.</li>
        <li>All shapes and lines in Dark Blue (RGB = 0 51 91) with a 1px border/stroke<br />Optional color for callout box is Black (RGB = 0 0 0) or White (RGB = 255 255 255); use when callout box color is too close to the color of the image.
        </li>
      </ul>
      <p>Keep in mind the following:</p>
      <ul>
        <li>Callouts on whole screens can be used to indicate specific steps that a user must take.</li>
        <li>Do not use red for callouts.</li>
        <li>Keep callouts to a minimum to ensure clarity. If necessary, use multiple screen shots.</li>
      </ul>
    </div>
  )
}

export default ImageEditing
