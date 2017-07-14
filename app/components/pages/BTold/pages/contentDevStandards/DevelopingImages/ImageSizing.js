import React from 'react'
import PropTypes from 'prop-types'

class ImageSizing extends React.Component {
  accordian (e) {
    e.target.classList.toggle('selected')
  }
  render () {
    return (
      <div>
        <h2>Image Sizing Guidelines</h2>

        <p>When resizing an image, consider the following questions to ensure your message gets across:</p>
        <ul>
          <li>what am I trying to convey with such a large image and do I lose information/clarity/understanding when scaling it smaller? does a different percentage maintain the message (if so, then use it...but try to keep it below 650px wide)?</li>
          <li>do smaller images in the same topic need to be scaled appropriately to maintain a common visual perspective?</li>
        </ul>
        <p>When resizing, keep the height/width aspect ratio. Review the settings for <strong>SnagIt</strong> and <strong>Photoshop</strong> for specific details about resizing options.
        </p>
        <p className='expandItem' onClick={(e) => this.accordian(e)}>Photoshop</p>
        <div className='expandingblock'>
          <table className='tableNoBorder' style={{width: '504px'}}>
            <tbody>
              <tr>
                <td style={{width: '264px'}}>
                  <p>Photoshop resize options:</p>
                  <ul>
                    <li>use the <strong>Save for Web</strong> command (Alt+Shift+Ctrl+S)<p>This will optimize the image for the web.</p>
                    </li>
                    <li>leave all <strong>Preset</strong> selections at the defaults<p>For screen shots, the defaults are sufficient.</p>
                      <p>For photos or high-color images, refer to the Photoshop topic indicated below for details.</p>
                    </li>
                    <li>select <strong>Constrain Proportions</strong>
                      <p>This option keeps the image aspect ratio fixed while changing the width or height.</p>
                      <p>Always click <strong>Apply</strong>.<br />Pressing Enter does not work to apply the resize settings.</p>
                      <p>Refer to the "Optimization options for GIF and PNG-8 formats" topic in the Photoshop help for a discussion on all the optimization options.</p>
                    </li>
                  </ul>
                </td>
                <td style={{width: '240px'}}>
                  <p><img src={require('./images/24937.gif')} /></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='expandItem' onClick={(e) => this.accordian(e)}>SnagIt</p>
        <div className='expandingblock'>
          <table className='tableNoBorder' style={{width: '504px'}}>
            <tbody>
              <tr>
                <td style={{width: '264px'}}>
                  <p>SnagIt resize options:</p>
                  <ul>
                    <li>select <strong>Use smooth scaling</strong>
                      <p>This option improves the readability of the scaled down capture.</p>
                    </li>
                    <li>select <strong>Keep aspect ratio</strong>
                      <p>This option keeps the image aspect ratio fixed while changing the width or height.</p>
                    </li>
                  </ul>
                </td>
                <td style={{width: '240px'}}>
                  <img src={require('./images/24933.gif')} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <table style={{width: '414px'}}>
          <tbody>
            <tr>
              <th style={{width: '132px'}}>
                <p>
                  <strong>Original Screen Capture Size</strong>
                </p>
              </th>
              <th style={{width: '72px'}}>
                <p>
                  <strong>Scale By</strong>
                </p>
              </th>
              <td className='clearCol' style={{width: '24px'}}>
                <p>&nbsp;</p>
              </td>
              <th style={{width: '102px'}}>
                <p>
                  <strong>Inline Images</strong>
                </p>
              </th>
              <th style={{width: '84px'}}>
                <p>
                  <strong>Scale To</strong>
                </p>
              </th>
            </tr>
            <tr>
              <td>
                <p>900+px wide</p>
              </td>
              <td>
                <p>50-55%</p>
              </td>
              <td className='clearCol'>
                <p>&nbsp;</p>
              </td>
              <td>
                <p>buttons</p>
              </td>
              <td>
                <p>9-12px high</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>750-900px wide</p>
              </td>
              <td>
                <p>60-65%</p>
              </td>
              <td className='clearCol'>
                <p>&nbsp;</p>
              </td>
              <td>
                <p>icons</p>
              </td>
              <td>
                <p>17-20px high</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>600-750px wide</p>
              </td>
              <td>
                <p>70-75%</p>
              </td>
              <td className='clearCol'>
                <p>&nbsp;</p>
              </td>
              <td>
                <p>&nbsp;</p>
              </td>
              <td>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>450-600px wide</p>
              </td>
              <td>
                <p>80-85%</p>
              </td>
              <td className='clearCol'>
                <p>&nbsp;</p>
              </td>
              <td>
                <p>&nbsp;</p>
              </td>
              <td>
                <p>&nbsp;</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>less than 450px wide</p>
              </td>
              <td>
                <p>90-95%</p>
              </td>
              <td className='clearCol'>
                <p>&nbsp;</p>
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
        <p>To maintain message clarity on the larger images when scaling, use one of two methods:</p>
        <ul>
          <li>visual elements on the image that call out the areas of import</li>
          <li>text that describes what's important in the image (like "as shown in the following image" or "the following image shows")</li>
        </ul>

      </div>
    )
  }
}

export default ImageSizing
