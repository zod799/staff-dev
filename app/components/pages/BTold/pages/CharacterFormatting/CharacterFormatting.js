import React from 'react'
import PropTypes from 'prop-types'

const CharacterFormatting = (props) => {
  return (
    <div>
      <h2>Character Formatting</h2>
      <h4>Using Italics</h4>
      <p>Never use italics. Italicized words can cause readability issues online: they look more fuzzy.</p>
      <h4>Using Color</h4>
      <p>In a global marketplace, the same color can have vastly different meaning for different cultures.
      </p>
      <p>The safest colors to use for documentation are blue, beige, black, and white. Blue is only used for hyperlinks; beige is too hard to see against a white background. Blue, beige, white are used as design elements for images and tables; see ?? for more information.</p>
      <p>Never use color in end-user output.</p>
      <p><strong>When to Color</strong></p>
      <ul>
        <li>during reviews to call out changed/updated items</li>
      </ul>
      <p><strong>What to Color</strong></p>
      <ul>
        <li>table headings against a dark background: white against dark blue</li>
      </ul>

      <h4>Using Bold</h4>
      <p><strong>When to Bold</strong></p>
      <ul>
        <li>the word is an item that the reader needs to perform an action on or make a decision about</li>
        <li>the word is a term, as in a term-def list</li>
      </ul>
      <p><strong>When Not To Bold</strong></p>
      <ul>
        <li>when readability is more important than following the guidelines</li>
      </ul>
      <p><strong>What to Bold</strong></p>
      <table style={{width: '599px'}}>
        <tbody>
          <tr>
            <th style={{width: '216px'}}>
              <p>Instance</p>
            </th>
            <th style={{width: '383px'}}>
              <p>Sample</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>The introduction statement and following punctuation in Note paragraphs</p>
            </td>
            <td>
              <p className='note'><strong>Note:</strong> The system will log you out automatically after 20 minutes of non-use.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Names of buttons, fields, menus, menu options</p>
            </td>
            <td>
              <p>Click the <strong>Add </strong><img src={require('./images/775.gif')} /> button.</p>
              <p>Select the applicable <strong>Event Category</strong> and the <strong>Event Type</strong>.</p>
              <p>From the <strong>File </strong>menu, select <strong>Company</strong>.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Menu paths, including the arrow</p>
            </td>
            <td>
              <p>Click <strong>File &gt; Company</strong>.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Keyboard keys</p>
            </td>
            <td>
              <p>Press <strong>Ctrl+F11</strong> on your keyboard.</p>
              <p>Press <strong>Ctrl+C</strong> to copy the selection.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Terms in term-def lists, not including the intervening punctuation</p>
            </td>
            <td>
              <ul>
                <li>
                  <strong>Client Match</strong> – percentage representing how well each candidate matched the Job Order requirements, listed in descending order.</li>
                <li>
                  <strong>Client Match Analysis</strong> – shows how well each of the candidate's Matching Attributes compared to the Job Order requirements.</li>
                <li>
                  <strong>Ignored</strong> – when present, indicates that the Matching Attribute was not used in determining the overall Match score.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>Fields in field-process lists</p>
            </td>
            <td>
              <ul>
                <li>
                  <strong>Status</strong> – Click to change Active contacts to Inactive status when they leave a company.
                </li>
                <li>
                  <strong>Billing Contact</strong> – Click to indicate that this contact is the billing contact and add relative details.</li>
                <li>
                  <strong>Marketing Preferences</strong> – Select the marketing preferences of a contact.</li>
                <li>
                  <strong>Record Card</strong> – Click the <strong>Record Card</strong> button to open a list of actions that have been run against the open record.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CharacterFormatting
