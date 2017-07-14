import React from 'react'
import PropTypes from 'prop-types'

const IfWhenWhether = (props) => {
  return (
    <div>
      <h2>If vs.When vs.Whether </h2>
      <p>To avoid ambiguity, use <strong>if</strong> for uncertainties or conditionals, use <strong>when</strong> for situations requiring preparation or the passage of time, and use whether for one or more alternative possibilities or situations.</p>

      <p><strong>Correct</strong></p>
      <blockquote>
        <p>The printer might insert stray characters if the wrong font cartridge is selected.</p>
        <p>If your document will not print ...</p>
        <p>To find out whether TrueType fonts are available or ...</p>
        <p>When you are ready to print your document ...</p>
      </blockquote>

      <p><strong>Incorrect</strong></p>
      <blockquote>
        <p>To find out if TrueType fonts are available ...</p>
        <p>When your document will not print ...</p>
      </blockquote>
      <p>Source: Microsoft Manual of Style</p>
    </div>
  )
}

export default IfWhenWhether
