import React from 'react'
import PropTypes from 'prop-types'

class SnagItCallout extends React.Component {
  render () {
    return (
      <div>
        <h2>SnagIt Callout Settings</h2>
        <p>These settings apply to both callout boxes and callout images. Callout styles consist of two settings: Properties and Drop Shadow. Except as noted, leave other style settings at the default value.
        </p>
        <p className='note'>
          <strong>Tip:</strong> Once the settings are applied, they will remain until changed. If changing between a highlight callout or a shadow callout, only select the Shape and select/clear the Drop shadow settings.</p>
        <h4>Properties</h4>
        <table className='tableNoBorder' style={{width: '672px'}}>
          <tbody>
            <tr>
              <td style={{width: '342px', borderRight: '1px solid #010101'}}>
                <p>For callout boxes <strong>highlighting an area</strong>:</p>
                <table className='tableNoBorder'>
                  <tr>
                    <td>
                      <ul>
                        <li><strong>Color</strong> is standard dark blue</li>
                        <li>Select the "empty box" <strong>Shape</strong> (upper left corner)</li>
                        <li><strong>Border width</strong> is 3</li>
                        <li><strong>Opacity</strong> is 100 (far right)</li>
                        <li>Select <strong>Drop shadow</strong>
                          <p>&nbsp;</p>
                        </li>
                      </ul>
                    </td>
                    <td><img src={require('./images/24940.gif')} /></td>
                  </tr>
                </table>
              </td>
              <td style={{width: '330px', paddingLeft: '15px'}}>
                <p>For callout boxes <strong>shadowing an area</strong>:</p>
                <table className='tableNoBorder'>
                  <tr>
                    <td>
                      <ul>
                        <li><strong>Color</strong> is gray</li>
                        <li>Select the "filled box-no stroke" <strong>Shape</strong> (bottom left corner)</li>
                        <li><strong>Border width</strong> is 3</li>
                        <li><strong>Opacity</strong> is 40-60%</li>
                      </ul>
                    </td>
                    <td><img src={require('./images/24941.gif')} /></td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <h4>Drop Shadow</h4>
        <p><strong>Shadow color</strong> is black, <strong>Horizontal</strong>/<strong>Vertical depth</strong> is 5, <strong>Opacity</strong> at 51, and <strong>Blur</strong> at 2. (These are the default settings.)</p>
        <p><img src={require('./images/24942.gif')} /></p>

        <h4>Lines</h4>
        <table className='tableNoBorder' style={{width: '372px'}}>
          <tbody>
            <tr>
              <td style={{width: '210px'}}>
                <ul>
                  <li>Select the <strong>Style</strong> – solid straight or solid bezier curve; no end cap</li>
                  <li>Select <strong>Antialias</strong>
                    <p>This will provide a smooth line.</p>
                    <p>Note that lines will have the same <strong>Color</strong>, <strong>Width</strong>, <strong>Opacity</strong>, and <strong>Drop Shadow </strong>settings as the callout box.</p>
                  </li>
                </ul>
              </td>
              <td style={{width: '162px'}}>
                <p><img src={require('./images/24943.gif')} /></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SnagItCallout
