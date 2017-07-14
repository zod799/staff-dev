import React from 'react'
import PropTypes from 'prop-types'

const PhotoshopCallout = (props) => {
  return (
    <div>
      <h2>Photoshop Callout Settings</h2>
      <p>These settings apply to both callout boxes and callout images. Callout styles consist of three to four settings: Blending Options, Drop Shadow, optional Inner Shadow, and Stroke. Except as noted, leave other style settings at the default value.</p>
      <table className='tableNoBorder' style={{width: '480px'}}>
        <tbody>
          <tr>
            <td style={{width: '258px'}}>
              <p className='note'><strong>Tip:</strong> Create the style using the settings below.
                <br />From the Layer Style dialog box, click the New Style button and name the style.
                <br />From the Styles palette, select the style to apply to the selected layer.</p>
            </td>
            <td style={{width: '222px'}}>
              <p><img src={require('./images/24916.gif')} /></p>
            </td>
          </tr>
        </tbody>
      </table>

      <h4>Blending Options</h4>
      <ul>
        <li>For callout boxes highlighting an area, <strong>Fill Opacity</strong> is 0%.</li>
        <li>For callout boxes shadowing an area, <strong>Fill Opacity</strong> is as needed (typically 40-60%).</li>
      </ul>
      <p><img src={require('./images/24912.gif')} /></p>

      <h4>Drop Shadow</h4>
      <p><strong>Angle</strong> is 120, <strong>Distance</strong> is 5px, <strong>Spread</strong> is 0px, <strong>Size</strong> is 5px.</p>
      <p><img src={require('./images/24913.gif')} /></p>

      <h4>Optional: Inner Shadow</h4>
      <p>Always use same settings as <strong>Drop Shadow</strong>.</p>
      <p><img src={require('./images/24914.gif')} /></p>

      <h4>Stroke</h4>
      <p>Depending on needs, <strong>Position</strong> of callout box can be inside, outside, or center. <strong>Color</strong> is standard dark blue (or black or white as needed).</p>
      <p><img src={require('./images/24915.gif')} /></p>
    </div>
  )
}

export default PhotoshopCallout
