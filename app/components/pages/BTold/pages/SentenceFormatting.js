import React from 'react'
import PropTypes from 'prop-types'

class SentenceFormatting extends React.Component {
  render () {
    return (
      <div>
        <h2>Sentence-level Formatting</h2>

        <h4>Notes</h4>
        <p>When writing a note or tip use proper character formatting, punctuation and paragraph style as shown here.</p>
        <p className='note'><strong>Note:</strong> The introduction statement and colon should be in bold. The note should be demarcated with horizontal lines above and below the text. </p>

        <h4>Tips</h4>
        <p className='note'><strong>Tip!</strong> The tip or note can also be formatted as a list note, which indents the text when it appears in a list.</p>

        <h4>Important!</h4>
        <p>When writing an "Important!" statement use proper character formatting, punctuation and paragraph style as shown here.</p>
      </div>
    )
  }
}

export default SentenceFormatting
