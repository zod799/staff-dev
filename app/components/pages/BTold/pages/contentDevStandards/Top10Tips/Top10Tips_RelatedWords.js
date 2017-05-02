import React from 'react'
import PropTypes from 'prop-types'

const RelatedWords = (props) => {
  return (
    <div>
      <h2>Keep related words together</h2>
      <p>The position of the words in a sentence is the principal means of showing their relationship. Confusion and ambiguity result when words are badly placed. The writer must, therefore, bring together the words and groups of words that are related in thought, and keep apart those which are not so related.</p>
      <table className='tableNoBorder'>
        <tbody>
          <tr>
            <td style={{width: '18px'}}>
              <p>&nbsp;</p>
            </td>
            <td style={{width: '240px'}}>
              <p>He noticed a large stain in the rug that was right in the center.</p>
            </td>
            <td style={{width: '12px'}}>
              <p>&nbsp;</p>
            </td>
            <td style={{width: '252px'}}>
              <p>He noticed a large stain right in the center of the rug.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>You can call your mother in London and tell her all about George's taking you out to dinner for just two dollars.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>For just two dollars you can call your mother in London and tell her all about George's taking you out to dinner.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>New York's first commercial human-sperm bank opened Friday with semen samples from eighteen men frozen in a stainless steel tank.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>New York's first commercial human-sperm bank opened Friday when semen samples were taken from eighteen men. The samples were then frozen and stored and in a stainless steel tank.</p>
            </td>
          </tr>

        </tbody>
      </table>
      <p>In the left-hand version of the first example, the reader has no way of knowing whether the stain was in the center of the rug or the rug was in the center of the room. In the left-hand version of the second example, the reader may well wonder which cost two dollars—the phone call or the dinner. In the left-hand version of the third example, the reader's heart goes out to those poor fellows frozen in a steel tank.</p>
      <p>...</p>
      <p>If the antecedent consists of a group of words, the relative comes at the end of the group, unless this would cause ambiguity.</p>
      <table className='tableNoBorder'>
        <tbody>
          <tr>
            <td style={{width: '18px'}}>
              <p>&nbsp;</p>
            </td>
            <td style={{width: '504px'}}>
              <p>The Superintendent of the Chicago Division, who</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>No ambiguity results from the above. But</p>
      <table className='tableNoBorder'>
        <tbody>
          <tr>
            <td style={{width: '18px'}}>
              <p>&nbsp;</p>
            </td>
            <td style={{width: '504px'}}>
              <p>A proposal to amend the Sherman Act, which has been variously judged</p>
            </td>
          </tr>

        </tbody>
      </table>
      <p>leaves the reader wondering whether it is the proposal or the Act that has been variously judged. The relative clause must be moved forward, to read, "A proposal, which has been variously judged, to amend the Sherman Act...."</p>
      <p>...</p>
      <p>Modifiers should come, if possible, next to the words they modify. If several expressions modify the same word, they should be arranged so no wrong relation is suggested.</p>
      <table className='tableNoBorder'>
        <tbody>
          <tr>
            <td style={{width: '18px'}}>
              <p>&nbsp;</p>
            </td>
            <td style={{width: '240px'}}>
              <p>All the members were not present.</p>
            </td>
            <td style={{width: '12px'}}>
              <p>&nbsp;</p>
            </td>
            <td style={{width: '252px'}}>
              <p>Not all the member were present.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>She only found two mistakes.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>She found only two mistakes.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>The director said he hoped all members would give generously to the Fund at a meeting of the committee yesterday.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>At a meeting of the committee yesterday, the director said he hoped all members would give generously to the Fund.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>Major R.E. Joyce will give a lecture on Tuesday evening in Bailey Hall, to which the public is invited "My Experiences in Mesopotamia" 8:00 P.M.</p>
            </td>
            <td>
              <p>&nbsp;</p>
            </td>
            <td>
              <p>On Tuesday evening at eight, Major R.E. Joyce will give a lecture in Bailey Hall on "My Experiences in Mesopotamia." The public is invited.</p>
            </td>
          </tr>

        </tbody>
      </table>
      <p>Note, in the left-hand example, how swiftly meaning departs when words are wrongly juxtaposed.</p>
    </div>
  )
}

export default RelatedWords
