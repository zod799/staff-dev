import React from 'react'
import PropTypes from 'prop-types'

class Top10Tips extends React.Component {
  accordian (e) {
    e.target.classList.toggle('selected')
  }
  render () {
    return (
      <div>
        <h2>Top 10 Tips</h2>
        <p>Here are 10 tips culled from the Microsoft Manual of Style and The Elements of Style:</p>
        <p className='note'>
          <strong>Note:</strong>
          The "top 10" items 1–8 are from the Microsoft Manual of Style "International Considerations" topic. However, since these are important guidelines for all information development activities, the text has been edited to reflect a "global" style. Where needed, specifics about writing for an international audience has been retained. In a couple instances, additional style guidelines were added if appropriate to the discussion.
        </p>
        <p className='note'>
          <strong>Note:</strong>
          The "top 10" items 9–10 summarize important points from The Elements of Style.
        </p>

        <ol className='accordian'>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Use correct terminology and consistent wording.</span>
            <div className='expandingblock'>
              <h3>Define and use the appropriate terminology, according to the software and this guide.</h3>
              <p>Localizers and translators work with bilingual glossaries that contain technical terms and phrases found in the product interface and documentation. Using correct and consistent terminology saves translation time (because glossaries can be shorter and simpler), allows some automatic translation, and allows vendors to use multiple translators on a project. For example, commands are clicked, not selected. (For more information, see Writing Procedures.)
              </p>
              <p className='bold'>Correct</p>
              <p>&hellip; when you click <strong>Create</strong> &hellip;</p>
              <p className='bold'>Incorrect</p>
              <p>&hellip; when you select the <strong>Create</strong> command &hellip;</p>
              <h3>Use only one term to name one concept.</h3>
              <p>Using several terms to express the same concept leads to misunderstanding and possibly error in translation. For example, the words create, add, and insert are often used for the same action. The solution is to choose one term for each concept and use it consistently.</p>
              <p>Using the word tab for five different concepts, for example, forces the reader [translator] to choose the correct meaning [translation] in any given context, which may result in misunderstanding [an error]. The solution is to use tab for dialog box panels only, to use the entire term (tab stop, tab character, and so on) in the other cases, and to use an alternative verb to describe movement of the insertion point using the TAB key.</p>
              <p className='bold'>Correct</p>
              <p>&hellip; using the <strong>TAB</strong> key to move through a dialog box</p>
              <p>&hellip; setting a tab stop</p>
              <p>&hellip; moving a tab mark on the ruler</p>
              <p>&hellip; how to show or hide tab characters</p>
              <p>&hellip; the <strong>View</strong> tab in the <strong>Options</strong> dialog box</p>
              <p className='bold'>Incorrect</p>
              <p>&hellip; to tab through a dialog box</p>
              <p>&hellip; setting a tab</p>
              <p>&hellip; moving a tab on the ruler</p>
              <p>&hellip; how to show or hide tabs</p>
              <h3>Use both words and phrases consistently.</h3>
              <p>Consistent word and phrase usage allows a reader to quickly orient to the message, allowing scanning capabilities and faster comprehension.</p>
              <p className='note'>
                <strong>Tip:</strong>
                Create AuthorIT objects for individual phrases and re-use them in the appropriate places. Once embedded, you can apply any paragraph style.
              </p>
              <p>Localization glossaries now include phrases and even entire paragraphs. When all of the following phrases are used in a document instead of just one of them, the localizers are unable to reuse already translated material.</p>
              <p className='bold'>Lack of consistency</p>
              <p>The following prompt will appear &hellip;</p>
              <p>You will be prompted with &hellip;</p>
              <p>This prompt appears &hellip;</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Avoid ambiguity.</span>
            <div className='expandingblock'>
              <h3>In colloquial English, words that might have clarified a sentence are sometimes omitted.</h3>
              <p>This is most often the case of prepositions and verbs used with gerunds. Because gerunds are not found in most languages, they represent a special challenge for the translator; do not omit the accompanying words that are essential to the meaning.</p>
              <p className='bold'>Correct</p>
              <p>You can change the Admin.tpl and the Admin.inf files that are using the Template utility.</p>
              <p>You can change the Admin.tpl and the Admin.inf files by using the Template utility.</p>
              <p>This prevents you from accidentally losing your work if your computer runs out of memory.
              </p>
              <p className='bold'>Incorrect</p>
              <p>You can change the Admin.tpl and the Admin.inf files using the Template utility.</p>
              <p>This prevents you from accidentally losing your work by your computer's running out of memory.
              </p>
              <h3>Avoid overmodified nouns, or noun stacks.</h3>
              <p>These are especially difficult to understand [translate] when several different combinations could make sense, as in the first incorrect example.</p>
              <p className='bold'>Correct</p>
              <p>For new users, set the parameters to the default printer configuration.</p>
              <p>Enter the maximum length of time, in number of days, that you want to keep the address lists updated by automatic synchronization. Then press <strong>ENTER</strong>.</p>
              <p className='bold'>Incorrect</p>
              <p>Set default printer configuration parameters for new users.</p>
              <p>Enter the maximum length of time that you want to keep the automatic synchronization address list updates in days and press <strong>ENTER</strong>.</p>
              <p>Note that in some cases, if the context is clear, some nouns can be eliminated. "Automatic synchronization" may be unnecessary in the preceding examples, especially because the focus is on updated address lists.</p>
              <h3>Be specific in defining a role versus a person.</h3>
              <p className='bold'>Correct</p>
              <p>To create another administrator account, click <strong>New</strong> on the <strong>File</strong> menu.</p>
              <p>To set privileges for another administrator, click <strong>New</strong> on the <strong>File</strong> menu.</p>
              <p className='bold'>Incorrect</p>
              <p>To create another administrator, click <strong>New</strong> on the <strong>File</strong> menu.</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Avoid long and complex sentences.</span>
            <div className='expandingblock'>
              <p>A complex sentence requires the reader [translator] first to understand the content before, maybe, understanding the concept. In translation, the translator must then choose the main clause, which the translation should begin with, and then translate it. When conveying complex ideas, put main ideas first and break the material into small units. If necessary, clarify by reformatting.</p>
              <p className='bold'>Correct</p>
              <p>The Dispatch program is used for directory synchronization. It runs the programs that transfer both the local address updates from the requestors to the directory server and the global address updates back to the requestors for processing.</p>
              <p className='bold'>Incorrect</p>
              <p>Directory synchronization uses the Dispatch program to run the programs that transfer the local address updates from the requestors to the directory server and to transfer the global address updates back to the requestors for processing.</p>

              <p className='bold'>Easy to follow</p>
              <p>However, if the newly attached data file contains field names different from those inserted in the main document, you must do one of the following:
              </p>
              <ul className='listbullet'>
                <li className='listbullet'>Change the field names in the header record to match the field names in the main document.</li>
                <li className='listbullet'>Replace the field names in the main document.
                </li>
              </ul>
              <p className='bold'>Difficult to follow</p>
              <p>However, if the newly attached data file contains field names different from those inserted in the main document, you must either change the field names in the header record to match the field names in the main document or replace the field names in the main document.</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Use commas correctly.</span>
            <div className='expandingblock'>
              <h3>Set off introductory phrases and clauses with commas.</h3>
              <p className='bold'>Correct</p>
              <p>To manage your files, click the <strong>Start</strong> button &hellip;</p>
              <p>Using Control Panel, you can change the way Windows looks and works.</p>
              <h3>In a series, use commas after each item.</h3>
              <p className='bold'>Correct</p>
              <p>The Inbox pane is used to organize and store links to documents, search criteria, and shortcuts that you have created.</p>
              <p>Selections include: US, US/Canada, US/Canada/International, Global, and International.</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Use verbs as verbs and nouns as nouns.</span>
            <div className='expandingblock'>
              <p>Unlike many other languages, many English words can be used as both nouns and verbs, and nouns can be turned into verbs and vice versa. To avoid confusion or ambiguity, use standard and consistent terminology for computer actions. Try to find unambiguous synonyms for other words.</p>
              <p className='bold'>Correct</p>
              <p>If you edited your document &hellip;</p>
              <p>&hellip; information that you want to refer to</p>
              <p className='bold'>Incorrect</p>
              <p>If you made edits to your document &hellip;</p>
              <p>&hellip; information that you want to reference</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Follow standard English word order.</span>
            <div className='expandingblock'>
              <p>When two or more correct arrangements are possible, choose the order that will create the least ambiguity. Generally, this is subject-verb-object, with modifiers before or immediately following what they modify.</p>
              <p className='bold'>Standard word order</p>
              <p>Your primary concern may be to update the address lists.</p>
              <p className='bold'>Inverted word order</p>
              <p>To update the address lists may be your primary concern.</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Avoid idiomatic or colloquial expressions.</span>
            <div className='expandingblock'>
              <p>Idioms and colloquial expressions are usually untranslatable—by region, by industry, by age, by country. Many have no counterparts in other languages, or their use is considered inappropriate for the intended audience. Often, translators will substitute a more businesslike phrase for an idiomatic expression or leave the expression out altogether. In any case, the reader [translator] may have to take time to understand the meaning.</p>
              <p className='bold'>Correct</p>
              <p>Now you have an instant design.</p>
              <p>These simple steps complete the task.</p>
              <p className='bold'>Colloquial</p>
              <p>Now how's that for instant design!</p>
              <p>That's all there is to it.</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Avoid wordiness and jargon.</span>
            <div className='expandingblock'>
              <p>Succinct sentences are the easiest to understand [translate]. Jargon and wordiness blur the meaning and are hard to convert into another language and syntax. Also, because translators are paid by the word, wordiness is costly.</p>
              <p className='bold'>Concise</p>
              <p>You've concluded Lesson 4 and learned to use the drawing tools and text editing buttons. You can continue now, or leave the tutorial and return to Lesson 5 later. For more information, see "Saving and Quitting."</p>
              <p className='bold'>Wordy</p>
              <p>Now is probably a good time to save your presentation again. If you want to take a break before the next lesson, go ahead and exit PowerPoint. Refer to the steps noted earlier in this chapter if you need more information.</p>
              <p>You've concluded the fourth lesson and learned the basics of using the drawing tools and the text editing buttons. If you're ready to do more, just keep going. Or you can take a break and come back to Lesson 5 another time.</p>
            </div>
          </li>
          <li>
            <span className='expandItem' onClick={(e) => this.accordian(e)}>Keep related words together.</span>
            <div className='expandingblock'>
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
              <p>&hellip;</p>
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
              <p>leaves the reader wondering whether it is the proposal or the Act that has been variously judged. The relative clause must be moved forward, to read, "A proposal, which has been variously judged, to amend the Sherman Act&hellip;."</p>
              <p>&hellip;</p>
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
          </li>
          <li>Group similar sentences into a paragraph, similar topics into a chapter.</li>
        </ol>
      </div>
    )
  }
}

export default Top10Tips
