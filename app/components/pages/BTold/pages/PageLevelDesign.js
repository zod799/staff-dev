import React from 'react'
import PropTypes from 'prop-types'

const PageLevelDesign = (props) => {
  return (
    <div>
      <h2>Page-level Design</h2>
      <p>Here are a few rules to follow when creating job aids and quick reference guides.</p>

      <h4>Tables</h4>
      <p>The following colors can be used for table rows/columns.</p>

      <p className='note' style={{width: '200px'}}>Do Not Use Red</p>
      <table style={{width: '576px'}}>
        <tbody>
          <tr>
            <th style={{width: '30px'}}>
              <p>&nbsp;</p>
            </th>
            <th style={{width: '72px'}}>
              <p>Dark Blue</p>
            </th>
            <th style={{width: '78px'}}>
              <p>Light Blue</p>
            </th>
            <th style={{width: '72px'}}>
              <p>Light Tan</p>
            </th>
            <th style={{width: '66px'}}>
              <p>Black</p>
            </th>
            <th style={{width: '72px'}}>
              <p>White</p>
            </th>

          </tr>
          <tr>
            <th>
              <p>R</p>
            </th>
            <td>
              <p>0</p>
            </td>
            <td>
              <p>229</p>
            </td>
            <td>
              <p>244</p>
            </td>
            <td>
              <p>0</p>
            </td>
            <td>
              <p>255</p>
            </td>
          </tr>
          <tr>
            <th>
              <p>G</p>
            </th>
            <td>
              <p>51</p>
            </td>
            <td>
              <p>237</p>
            </td>
            <td>
              <p>242</p>
            </td>
            <td>
              <p>0</p>
            </td>
            <td>
              <p>255</p>
            </td>
          </tr>
          <tr>
            <th>
              <p>B</p>
            </th>
            <td>
              <p>91</p>
            </td>
            <td>
              <p>242</p>
            </td>
            <td>
              <p>236</p>
            </td>
            <td>
              <p>0</p>
            </td>
            <td>
              <p>255</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Dark Blue, Black, White and System Blue (0 0 255) are used for callouts in images.</p>

      <h4>Banners</h4>
      <p>Stretch blue banner horizontally across page if the same topic applies to the entire document.</p>

      <h4>Separating Columns</h4>
      <p>Always add a vertical line between two or three columns.</p>

      <h4>List Bullets</h4>
      <p>Align bullets and subsequent indentations to match across sections of text.</p>

      <h4>Orphan Words</h4>
      <p>Remove indentions to eliminate orphan words.</p>
    </div>
  )
}

export default PageLevelDesign
