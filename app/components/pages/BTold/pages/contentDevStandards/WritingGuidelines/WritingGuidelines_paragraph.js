import React from 'react'
import PropTypes from 'prop-types'

const ParagraphComposition = (props) => {
  return (
    <div>
      <h2>Make the paragraph the unit of composition</h2>
      <p className='note'>The following text is an excerpt from
        <em>The Elements of Style</em>
        by William Strunk Jr. and E.B. White, Fourth Edition, pages 15–17.
      </p>
      <p>The paragraph is a convenient unit; it serves all forms of [written] work. As long as it holds together, a paragraph may be of any length—a single, short sentence or a passage of great duration.</p>
      <p>If the subject on which you are writing is of slight extent, or if you intend to treat it very briefly, there may be no need of subdividing it into topics. Thus a brief description, a brief book review, a brief account of a single incident, a narrative merely outlining an action, the setting forth of a single idea—any one of these is best written in a single paragraph. After the paragraph has been written, examine it to see whether subdivision will improve it.
      </p>
      <p>Ordinarily, however, a subject requires subdivision into topics, each of which should be dealt with in a single paragraph. The object of treating each topic in a paragraph by itself is, of course, to aid the reader. The beginning of each paragraph is a signal to him that a new step in the development of the subject has been reached.</p>
      <p>As a rule, single sentences should not be written or printed as paragraphs. An exception may be made of sentences of transition, indicating the relation between the parts of an exposition or argument.
      </p>
      <p>...</p>
      <p>As a rule, begin each paragraph either with a sentence that suggests the topic or with a sentence that helps with the transition. If a paragraph forms part of a larger composition, its relation to what precedes, or its function as a part of the whole, may need to be expressed. This can sometimes be done by a mere word or phrase (e.g. again, therefore, for the same reason) in the first sentence. Sometimes, however, it is expedient to get into the topic slowly, by way of a sentence or two of introduction or transition.</p>
      <p>...</p>
      <p>In general, remember that paragraphing calls for a good eye as well as a logical mind. Enormous blocks of print look formidable to readers, who are often reluctant to tackle them. Therefore, breaking long paragraphs in two, even if it is not necessary to do so for sense, meaning, and logical development, is often a visual help. But remember, too, that firing off many short paragraphs in quick succession can be distracting. Paragraph breaks used only for show read like writing of commerce or of display advertising. Moderation and a sense of order should be the main considerations in paragraphing.
      </p>
      <p className='note'>
        <strong>Authoring Tip Side Note:</strong>
        This same idea can be applied to the topics of a guide and the pages of a website. Logical sorting and organization only aids a reader's ability to understand an idea. Creating different chapters, or top-level web pages, that contain sub-topics indicates that new ideas are being presented. Organizing topics into groups also helps the reader to learn material in logical chunks, aiding in the retention of information and ability to apply the learning in real-world tasks.</p>
    </div>
  )
}

export default ParagraphComposition
