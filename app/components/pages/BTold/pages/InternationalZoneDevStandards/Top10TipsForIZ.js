import React from 'react'
import PropTypes from 'prop-types'

class Top10TipsForIZ extends React.Component {
  accordian (e) {
    e.target.classList.toggle('selected')
  }
  render () {
    return (
      <div>
        <h2>The Top 10 Tips for IZ</h2>
        <p className='note'><strong >Note:</strong> The "top 10" items 1–8 are from the Microsoft Manual of Style "International Considerations" topic. However, since these are important guidelines for all information development activities, the text has been edited to reflect a "global" style. Where needed, specifics about writing for an international audience has been retained. In a couple instances, additional style guidelines were added if appropriate to the discussion.</p>

        <p className='note'><strong >Note:</strong> The "top 10" items 9–10 summarize important points from The Elements of Style.</p>
        <ol>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Use correct terminology and consistent wording.</p>
            <div className='expandingblock'>
              <h4>Define and use the appropriate terminology, according to the software and this guide.</h4>
              <p>Localizers and translators work with bilingual glossaries that contain technical terms and phrases found in the product interface and documentation. Using correct and consistent terminology saves translation time (because glossaries can be shorter and simpler), allows some automatic translation, and allows vendors to use multiple translators on a project. For example, commands are clicked, not selected.
              </p>
              <p>
                <strong >Correct</strong>
              </p>
              <p>... when you click
                <strong >Create</strong>
                ...
              </p>
              <p>
                <strong >Incorrect</strong>
              </p>
              <p>... when you select the
                <strong >Create</strong>
                command ...
              </p>
              <h4>Use only one term to name one concept.</h4>
              <p>Using several terms to express the same concept leads to misunderstanding and possibly error in translation. For example, the words create, add, and insert are often used for the same action. The solution is to choose one term for each concept and use it consistently.
              </p>
              <p>Using the word tab for five different concepts, for example, forces the reader [translator] to choose the correct meaning [translation] in any given context, which may result in misunderstanding [an error]. The solution is to use tab for dialog box panels only, to use the entire term (tab stop, tab character, and so on) in the other cases, and to use an alternative verb to describe movement of the insertion point using the TAB key.
              </p>
              <p>
                <strong >Correct</strong>
              </p>
              <p>... using the <strong >TAB</strong> key to move through a dialog box</p>
              <p>... setting a tab stop</p>
              <p>... moving a tab mark on the ruler</p>
              <p>... how to show or hide tab characters</p>
              <p>... the <strong >View</strong> tab in the <strong >Options</strong> dialog box</p>
              <p>
                <strong >Incorrect</strong>
              </p>
              <p>... to tab through a dialog box</p>
              <p>... setting a tab</p>
              <p>... moving a tab on the ruler</p>
              <p>... how to show or hide tabs</p>
              <h4>Use both words and phrases consistently.</h4>
              <p>Consistent word and phrase usage allows a reader to quickly orient to the message, allowing scanning capabilities and faster comprehension.</p>
              <p className='note'><strong >Tip:</strong> Create AuthorIT objects for individual phrases and re-use them in the appropriate places. Once embedded, you can apply any paragraph style.</p>
              <p>Localization glossaries now include phrases and even entire paragraphs. When all of the following phrases are used in a document instead of just one of them, the localizers are unable to reuse already translated material.</p>
              <p>
                <strong >Lack of consistency</strong>
              </p>
              <p>The following prompt will appear ...</p>
              <p>You will be prompted with ...</p>
              <p>This prompt appears ...</p>
            </div>
          </li>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Avoid ambiguity.</p>
            <div className='expandingblock'>
              <h4>In colloquial English, words that might have clarified a sentence are sometimes omitted.</h4>
              <p>This is most often the case of prepositions and verbs used with gerunds. Because gerunds are not found in most languages, they represent a special challenge for the translator; do not omit the accompanying words that are essential to the meaning.</p>
              <p>
                <strong >Correct</strong>
              </p>
              <p>You can change the Admin.tpl and the Admin.inf files that are using the Template utility.</p>
              <p>You can change the Admin.tpl and the Admin.inf files by using the Template utility.</p>
              <p>This prevents you from accidentally losing your work if your computer runs out of memory.
              </p>
              <p>
                <strong >Incorrect</strong>
              </p>
              <p>You can change the Admin.tpl and the Admin.inf files using the Template utility.</p>
              <p>This prevents you from accidentally losing your work by your computer's running out of memory.
              </p>
              <h4>Avoid overmodified nouns, or noun stacks.</h4>
              <p>These are especially difficult to understand [translate] when several different combinations could make sense, as in the first incorrect example.</p>
              <p>
                <strong >Correct</strong>
              </p>
              <p>For new users, set the parameters to the default printer configuration.</p>
              <p>Enter the maximum length of time, in number of days, that you want to keep the address lists updated by automatic synchronization. Then press <strong >ENTER</strong>.
              </p>
              <p>
                <strong >Incorrect</strong>
              </p>
              <p>Set default printer configuration parameters for new users.</p>
              <p>Enter the maximum length of time that you want to keep the automatic synchronization address list updates in days and press <strong >ENTER</strong>.
              </p>
              <p>Note that in some cases, if the context is clear, some nouns can be eliminated. "Automatic synchronization" may be unnecessary in the preceding examples, especially because the focus is on updated address lists.
              </p>
              <h4>Be specific in defining a role versus a person.</h4>
              <p>
                <strong >Correct</strong>
              </p>
              <p>To create another administrator account, click <strong >New</strong> on the <strong >File</strong> menu.</p>
              <p>To set privileges for another administrator, click <strong >New</strong> on the <strong >File</strong> menu.</p>
              <p>
                <strong >Incorrect</strong>
              </p>
              <p>To create another administrator, click <strong >New</strong> on the <strong >File</strong> menu.</p>
            </div>
          </li>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Avoid long and complex sentences.</p>
            <div className='expandingblock'>
              <p>A complex sentence requires the reader [translator] first to understand the content before, maybe, understanding the concept. In translation, the translator must then choose the main clause, which the translation should begin with, and then translate it. When conveying complex ideas, put main ideas first and break the material into small units. If necessary, clarify by reformatting.</p>
              <p>
                <strong >Correct</strong>
              </p>
              <p>The Dispatch program is used for directory synchronization. It runs the programs that transfer both the local address updates from the requestors to the directory server and the global address updates back to the requestors for processing.</p>
              <p>
                <strong >Incorrect</strong>
              </p>
              <p>Directory synchronization uses the Dispatch program to run the programs that transfer the local address updates from the requestors to the directory server and to transfer the global address updates back to the requestors for processing.</p>
              <p>
                <strong >Easy to follow</strong>
              </p>
              <p>However, if the newly attached data file contains field names different from those inserted in the main document, you must do one of the following:
              </p>
              <ul>
                <li>Change the field names in the header record to match the field names in the main document.</li>
                <li>Replace the field names in the main document.</li>
              </ul>
              <p>
                <strong >Difficult to follow</strong>
              </p>
              <p>However, if the newly attached data file contains field names different from those inserted in the main document, you must either change the field names in the header record to match the field names in the main document or replace the field names in the main document.</p>
            </div>
          </li>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Use commas correctly.</p>
            <div className='expandingblock'>
              <h4>Set off introductory phrases and clauses with commas.</h4>
              <p>
                <strong >Correct</strong>
              </p>
              <p>To manage your files, click the <strong >Start</strong> button ...</p>
              <p>Using Control Panel, you can change the way Windows looks and works.</p>
              <h4>In a series, use commas after each item.</h4>
              <p>
                <strong >Correct</strong>
              </p>
              <p>The Inbox pane is used to organize and store links to documents, search criteria, and shortcuts that you have created.</p>
              <p>Selections include: US, US/Canada, US/Canada/International, Global, and International.</p>
            </div>
          </li>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Use verbs as verbs and nouns as nouns.</p>
            <div className='expandingblock'>
              <p>Unlike many other languages, many English words can be used as both nouns and verbs, and nouns can be turned into verbs and vice versa. To avoid confusion or ambiguity, use standard and consistent terminology for computer actions. Try to find unambiguous synonyms for other words.</p>
              <p>
                <strong >Correct</strong>
              </p>
              <p>If you edited your document ...</p>
              <p>... information that you want to refer to</p>
              <p>
                <strong >Incorrect</strong>
              </p>
              <p>If you made edits to your document ...</p>
              <p>... information that you want to reference</p>
            </div>
          </li>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Follow standard English word order.</p>
            <div className='expandingblock'>
              <p>When two or more correct arrangements are possible, choose the order that will create the least ambiguity. Generally, this is subject-verb-object, with modifiers before or immediately following what they modify.</p>
              <p>
                <strong >Standard word order</strong>
              </p>
              <p>Your primary concern may be to update the address lists.</p>
              <p>
                <strong >Inverted word order</strong>
              </p>
              <p>To update the address lists may be your primary concern.</p>
            </div>
          </li>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Avoid idiomatic or colloquial expressions.</p>
            <div className='expandingblock'>
              <p>Idioms and colloquial expressions are usually untranslatable—by region, by industry, by age, by country. Many have no counterparts in other languages, or their use is considered inappropriate for the intended audience. Often, translators will substitute a more businesslike phrase for an idiomatic expression or leave the expression out altogether. In any case, the reader [translator] may have to take time to understand the meaning.</p>
              <p>
                <strong >Correct</strong>
              </p>
              <p>Now you have an instant design.</p>
              <p>These simple steps complete the task.</p>
              <p>
                <strong >Colloquial</strong>
              </p>
              <p>Now how's that for instant design!</p>
              <p>That's all there is to it.</p>
            </div>
          </li>
          <li>
            <p className='expandItem' onClick={(e) => this.accordian(e)}>Avoid wordiness and jargon.</p>
            <div className='expandingblock'>
              <p>Succinct sentences are the easiest to understand [translate]. Jargon and wordiness blur the meaning and are hard to convert into another language and syntax. Also, because translators are paid by the word, wordiness is costly.</p>
              <p>
                <strong >Concise</strong>
              </p>
              <p>You've concluded Lesson 4 and learned to use the drawing tools and text editing buttons. You can continue now, or leave the tutorial and return to Lesson 5 later. For more information, see "Saving and Quitting."</p>
              <p>
                <strong >Wordy</strong>
              </p>
              <p>Now is probably a good time to save your presentation again. If you want to take a break before the next lesson, go ahead and exit PowerPoint. Refer to the steps noted earlier in this chapter if you need more information.</p>
              <p>You've concluded the fourth lesson and learned the basics of using the drawing tools and the text editing buttons. If you're ready to do more, just keep going. Or you can take a break and come back to Lesson 5 another time.</p>
            </div>
          </li>
        </ol>
      </div>
    )
  }
}

export default Top10TipsForIZ
