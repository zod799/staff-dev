import React from 'react'
import PropTypes from 'prop-types'

class OverviewPunctuation extends React.Component {
  accordian (e) {
    e.target.classList.toggle('selected')
  }
  render () {
    return (
      <div>
        <h2>Brief Overview of Punctuation: Semicolon, Colon, Parenthesis, Dash, Quotation Marks, and Italics</h2>
        <p>"Brief Overview of Punctuation: Semicolon, Colon, Parenthesis, Dash, Quotation Marks, and Italics" brought to you by the Purdue University Online Writing Lab at http://owl.english.purdue.edu
        </p>
        <p>--------------------------------------------------------------------------------</p>
        <p>Punctuation marks are signals to your readers. In speaking, we can pause, stop, or change our tone of voice. In writing, we use the following marks of punctuation to emphasize and clarify what we mean. Punctuation marks discussed in other OWL documents include commas at http://owl.english.purdue.edu/handouts/grammar/g_comma.html, apostrophes at http://owl.english.purdue.edu/handouts/grammar/g_apost.html, quotation marks at http://owl.english.purdue.edu/handouts/grammar/g_quote.html, and hyphens at http://owl.english.purdue.edu/handouts/grammar/g_hyphen.html.
        </p>

        <p className='expandItem' onClick={(e) => this.accordian(e)}>Semicolon ;</p>
        <div className='expandingblock'>
          <p>Use a semicolon between main clauses. The two main clauses must be closely related in meaning and are not joined by a coordinating conjunction.</p>
          <p>Ex. In Irish folklore the Sidhe (pronounced "she") spirits sometimes appear as men and women; other times they appear as birds and beasts. The Sidhe travel as clouds of dust; they rest as blades of grass.</p>
          <p>Use a semicolon to separate main clauses joined by conjunctive adverbs.</p>
          <p>Ex. In folklore the Sidhe live under Ireland's rocky soil or beneath the mutinous seas; consequently, some Irish claim the Sidhe are never far from them.</p>
          <p>Use a semicolon to separate main clauses joined by coordinating conjunctions.</p>
          <p>Ex. The Sidhe sing in glens, dance on boulders, and play hurling in the fields; but they also curse, bicker and fight each other.</p>
          <p>Use semicolons to separate long phrases or clauses in a series if they contain commas.</p>
          <p>Ex. Partial to humans, Sidhe spirits will help them in their work; aid them in the search for hidden money, lost jewels, and buried gold; and treat their sick pets, ailing livestock, and ill children.</p>
          <p>In addition to using a semicolon to join related independent clauses in compound sentences, you can use a semicolon to separate items in a series if the elements of the series already include commas. (For more help with independent clauses, look here: http://owl.english.purdue.edu/handouts/grammar/g_clause.html.)</p>
          <p>Ex. Members of the band include Harold Rostein, clarinetist; Tony Aluppo, tuba player; and Lee Jefferson, trumpeter.</p>
          <p>Do not use a semicolon to join dependent clauses or phrases and main clauses.</p>
          <p>Ex. According to some enthusiasts, only ten thousand Sidhe exist.</p>
          <p>Do not use a semicolon to introduce a list.</p>
          <p>Perhaps the Sidhe will join the ranks of other imaginary creatures, such as unicorns, leprechauns, and magical dwarfs.
          </p>
        </div>
        <p className='expandItem' onClick={(e) => this.accordian(e)}>Colon :</p>
        <div className='expandingblock'>
          <p>Use a colon . . .</p>
          <table style={{width: '498px'}} className='tableNoBorder'>
            <tbody>
              <tr>
                <td style={{width: '24px'}}>
                  <p>&nbsp;</p>
                </td>
                <td style={{width: '240px'}}>
                  <p>in the following situations:</p>
                </td>
                <td style={{width: '234px'}}>
                  <p>for example:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>after a complete statement in order to introduce one or more directly related ideas, such as a series of directions, a list, or a quotation or other comment illustrating or explaining the statement.</p>
                </td>
                <td>
                  <p>The daily newspaper contains four sections: news, sports, entertainment, and classified ads.</p>
                  <p>The strategies of corporatist industrial unionism have proven ineffective: compromises and concessions have left labor in a weakened position in the new "flexible" economy.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>in a business letter greeting.</p>
                </td>
                <td>
                  <p>Dear Ms. Winstead:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>between the hour and minutes in time notation.</p>
                </td>
                <td>
                  <p>5:30 p.m.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>between chapter and verse in biblical references.</p>
                </td>
                <td>
                  <p>Genesis 1:18</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Note: Do not misuse a colon by placing it after a linking verb (separating the verb from its direct object) or a preposition or by placing it in ia sentence that lacks a formal introduction for what follows.</p>
        </div>
        <p className='expandItem' onClick={(e) => this.accordian(e)}>Parentheses ()</p>
        <div className='expandingblock'>
          <p>Parentheses are occasionally and sparingly used for extra, nonessential material included in a sentence. For example, dates, sources, or ideas that are subordinate or tangential to the rest of the sentence are set apart in parentheses. Parentheses always appear in pairs.</p>
          <p>Before arriving at the station, the old train (someone said it was a relic of frontier days) caught fire.</p>
        </div>
        <p className='expandItem' onClick={(e) => this.accordian(e)}>(Em) Dash —</p>
        <div className='expandingblock'>
          <p>Use a[n em] dash (represented on a typewriter, a computer with no dashes in the type font, or in a handwritten document by a pair of hyphens with no spaces) . . .</p>
          <table style={{width: '498px'}} className='tableNoBorder'>
            <tbody>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>in the following situations:</p>
                </td>
                <td>
                  <p>for example:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>to emphasize a point or to set off an explanatory comment; but don't overuse dashes, or they will lose their impact.</p>
                </td>
                <td>
                  <p>To some of you, my proposals may seem radical—even revolutionary.</p>
                  <p>In terms of public legitimation—that is, in terms of garnering support from state legislators, parents, donors, and university administrators—English departments are primarily places where advanced literacy is taught.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>for an appositive phrase that already includes commas.</p>
                </td>
                <td>
                  <p>The boys—Jim, John, and Jeff—left the party early.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>For more help with appositives, look here: http://owl.english.purdue.edu/handouts/grammar/g_appos.html</p>
          <p>As you can see, dashes function in some ways like parentheses (used in pairs to set off a comment within a larger sentence) and in some ways like colons (used to introduce material illustrating or emphasizing the immediately preceding statement). But comments set off with a pair of dashes appear less subordinate to the main sentence than do comments in parentheses. And material introduced after a single dash may be more emphatic and may serve a greater variety of rhetorical purposes than material introduced with a colon.</p>
        </div>
        <p className='expandItem' onClick={(e) => this.accordian(e)}>Quotation Marks " "</p>
        <div className='expandingblock'>
          <p>Use quotation marks . . .</p>
          <table style={{width: '498px'}} className='tableNoBorder'>
            <tbody>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>in the following situations:</p>
                </td>
                <td>
                  <p>for example:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>to enclose direct quotations. Note that commas and periods go inside the closing quotation mark in conventional American usage; colons and semicolons go outside; and placement of question and exclamation marks depends on the situation (see our quotation marks document).</p>
                </td>
                <td>
                  <p>He asked, "Will you be there?" "Yes," I answered, "I'll look for you in the foyer."</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>to indicate words used ironically, with reservations, or in some unusual way; but don't overuse quotation marks in this sense, or they will lose their impact.</p>
                </td>
                <td>
                  <p>History is stained with blood spilled in the name of "civilization."</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>For more information on writing research papers and using quotations, see our workshop on writing research papers here http://owl.english.purdue.edu/workshops/hypertext/ResearchW/index.html.</p>
          <p className='note'>
            <strong>Note:</strong> Quotation marks (double or single) in online output is discouraged: for some users, they are difficult to see/distinguish on-screen. If quotation marks are required, try rewriting/re-designing the text, or use as directed above.</p>
        </div>
        <p className='expandItem' onClick={(e) => this.accordian(e)}>Underlining and Italics</p>
        <div className='expandingblock'>
          <p className='note'>
            <strong>Note:</strong> Underlining is not an approved method for identifying text in online format; it is not supported by Author-it.</p>
          <p className='note'>
            <strong>Note:</strong> Italics is discouraged from use for online output since it is often difficult/disruptive for on-screen reading.</p>
          <p>Underlining and italics are not really punctuation, but they are significant textual effects used conventionally in a variety of situations. Before computerized word-processing was widely available, writers would underline certain terms in handwritten or manually typed pages, and the underlining would be replaced by italics in the published version. Since word processing today allows many options for font faces and textual effects, it is generally recommended that you choose either underlining or italics and use it consistently throughout a given document as needed. Because academic papers are manuscripts and not final publications and because italics are not always easily recognized with some fonts, many instructors prefer underlining over italics for course papers. Whichever you choose, italics or underlining should be used . . .(in the following examples, word/phrases that should be underlined are bolded instead)</p>
          <table style={{width: '498px'}} className='tableNoBorder'>
            <tbody>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>in the following situations:</p>
                </td>
                <td>
                  <p>for example:</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>to indicate titles of complete or major works such as magazines, books, newspapers, academic journals, films, television programs, long poems, plays of three or more acts.</p>
                </td>
                <td>
                  <p>Faulkner's last novel was <em>The Reivers</em>.</p>
                  <p><strong>The Simpsons</strong> offers hilarious parodies of American culture and family life.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>foreign words that are not commonly used in English</p>
                </td>
                <td>
                  <p>Wearing blue jeans is <em>de rigueur</em> for most college students.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>words used as words themselves</p>
                </td>
                <td>
                  <p>The English word <strong>nuance</strong> comes from a Middle French word meaning "shades of color."</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>&nbsp;</p>
                </td>
                <td>
                  <p>words or phrases that you wish to emphasize</p>
                </td>
                <td>
                  <p>The very <em>founding principles</em> of our nation are at stake!</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p />
        </div>
        <p>After reviewing this handout, you can try the Purdue OWL exercise on semicolons, parentheses, dashes, quotation marks and italics (and then check your answers). You can find it here: http://owl.english.purdue.edu/handouts/grammar/g_overvwEX1.html</p>
        <p>To contact OWL, please visit our contact information page at http://owl.english.purdue.edu/lab/contact.html to find the right person to call or email</p>
        <p>--------------------------------------------------------------------------------</p>
        <p>The following information must remain intact on every handout printed for distribution.</p>
        <p>This page is located at http://owl.english.purdue.edu/handouts/print/grammar/g_commaproof.html</p>
        <p>Copyright ©1995-2004 by OWL at Purdue University and Purdue University. All rights reserved.</p>
        <p>Use of this site, including printing and distributing our handouts, constitutes acceptance of our terms and conditions of fair use, available at</p>
        <p>http://owl.english.purdue.edu/lab/fairuse.html.
        </p>
        <p>To contact OWL, please visit our contact information page at
        </p>
        <p>http://owl.english.purdue.edu/lab/contact.html to find the right person to call or email.
        </p>
      </div>
    )
  }
}

export default OverviewPunctuation
