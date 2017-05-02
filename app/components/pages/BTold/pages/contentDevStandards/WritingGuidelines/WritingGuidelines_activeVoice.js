import React from 'react'
import PropTypes from 'prop-types'

const ActiveVoice = (props) => {
  return (
    <div>
      <h2>Use the Active Voice</h2>
      <p className='note'>The following text is from
        <em>The Elements of Style</em>
        by William Strunk Jr. and E.B. White, Fourth Edition, pages 18–19.</p>
      <p>The active voice is usually more direct and vigorous than the passive:</p>
      <blockquote>I shall always remember my first visit to Boston.</blockquote>
      <p>This is much better than</p>
      <blockquote>My first visit to Boston will always be remembered by me.</blockquote>
      <p>The latter sentence is less direct, less bold, and less concise. If the writer tries to make it more concise by omitting "by me,"</p>
      <blockquote>My first visit to Boston will always be remembered,</blockquote>
      <p>it becomes indefinite: is it the writer, or some person undisclosed, or the world at large, that will always remember this visit?</p>
      <p>This rule does not, of course, mean that the writer should entirely discard the passive voice, which is frequently convenient and sometimes necessary.</p>
      <blockquote>The dramatists of the Restoration are little esteemed today.</blockquote>
      <blockquote>Modern readers have little esteem for the dramatists of the Restoration.</blockquote>
      <p>The first would be the preferred form in a paragraph on the dramatists of the Restoration, the second in a paragraph on the tastes of modern readers. The need to make a particular word the subject of the sentence will often, as in these examples, determine which voice is to be used.</p>
      <p>The habitual use of the active voice, however, makes for forcible writing. This is true not only in narrative concerned principally with action but in writing of any kind. Many a tame sentence of description or exposition can be made lively and emphatic by substituting a transitive in the active voice for some such perfunctory expression as there is, or could be heard.</p>
      <table className='tableNoBorder'>
        <tbody>
          <tr>
            <td style={{width: '321px'}}>
              <p>There were a great number of dead leaves lying on the ground.</p>
            </td>
            <td style={{width: '321px'}}>
              <p>Dead leaves covered the ground.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>At dawn the crowing of a rooster could be heard.</p>
            </td>
            <td>
              <p>The cock's crow came with dawn.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>The reason that he left college was that his health became impaired.</p>
            </td>
            <td>
              <p>Failing health compelled him to leave college.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>It was not long before he was very sorry that he had said what he had.</p>
            </td>
            <td>
              <p>He soon repented his words.</p>
            </td>
          </tr>

        </tbody>
      </table>
      <p>Note that in the examples above when a sentence is made stronger, it usually becomes shorter. Thus, brevity is a by-product of vigor.</p>
    </div>
  )
}

export default ActiveVoice
