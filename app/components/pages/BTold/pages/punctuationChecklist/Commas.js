import React from 'react'
import PropTypes from 'prop-types'

const Commas = (props) => {
  return (
    <div>
      <h2>Commas</h2>
      <p>"Proofreading for Commas" is brought to you by the Purdue University Online Writing Lab at http://owl.english.purdue.edu
      </p>
      <p>--------------------------------------------------------------------------------</p>
      <h4>Compound Sentence Commas</h4>
      <ol>
        <li>Skim your paper, looking only for the seven coordinating conjunctions:<p>and, nor, but, so, for, or, and yet.</p>
        </li>
        <li>Stop at each of these words to see whether there is an independent clause (a complete sentence), on both sides of it. (For more help, see our handout on independent clauses at http://owl.english.purdue.edu/handouts/grammar/g_clause.html.)</li>
        <li>If so, place a comma before the coordinating conjunction. Examples:<p>She wanted to buy a new car, but she didn't have enough money to do so.</p>
          <p>The wind blew fiercely, and the rain poured down.</p>
          <p>Alaska was not the last state admitted into the US, nor does it have the lowest total population.</p>
        </li>
      </ol>

      <h4>Comma Splices</h4>
      <ol>
        <li>Skim your paper, stopping at every comma.</li>
        <li>See whether you have an independent clause (a sentence) on both sides of the comma.</li>
        <li>If so, change the sentence in one of the following ways:
          <ul>
            <li>reword the sentence to change one clause into a subordinate (or dependent) clause (see our handout on dependent clauses at http://owl.english.purdue.edu/handouts/grammar/g_clause.html)
            </li>
            <li>add a coordinating conjunction after the comma
            </li>
            <li>replace the comma with a semicolon
            </li>
            <li>replace the comma with a period, question mark, or exclamation point, and capitalize the first word of the second clause
            </li>
          </ul>
          <p>
            <em>comma splice:</em>
            Americans speak too rapidly, this is a common complaint by foreign visitors.</p>
          <p>
            <em>correct:</em>
            Americans speak too rapidly; this is a common complaint by foreign visitors.</p>
          <p>
            <em>correct:</em>
            Foreign visitors commonly complain that Americans speak too rapidly.</p>
        </li>
      </ol>

      <h4>Introductory Commas</h4>
      <p>
        <strong>Introductory commas after dependent clauses</strong>
      </p>
      <ol>
        <li>Skim your paper, looking only at the first two or three words of each sentence.
        </li>
        <li>Stop if one of these words is a dependent marker such as while, because, when, if, after, when, etc. (see our Commas After Introductions at http://owl.english.purdue.edu/handouts/grammar/g_commaint.html).</li>
        <li>If necessary, place a comma at the end of the introductory dependent clause. Examples:<p>While I was writing, the phone rang.</p>
          <p>Because the weather was bad, we decided to cancel our planned picnic.</p>
          <p>After the last guests left the party, we had to begin cleaning the house.</p>
        </li>
      </ol>
      <p>
        <strong>Other introductory commas</strong>
      </p>
      <ol>
        <li>Skim your paper, looking only at the first word or two of each sentence.
        </li>
        <li>Stop if the word or phrase . . .<ul>
          <li>ends in -ing
            </li>
          <li>is an infinitive (to + verb)
            </li>
          <li>is an introductory word (well, yes, moreover, etc.)
            </li>
        </ul>
        </li>
        <li>Place a comma at the end of the introductory phrase. Examples:<p>To get a good grade, you must turn in all your homework problems.</p>
          <p>Walking to work, Jim stopped for coffee at the diner.</p>
          <p>Yes, I agree that the exam was difficult.</p>
        </li>
        <li>If the sentence begins with a prepositional phrase (a phrase beginning with in, at, on, between, with, etc.), place a comma after the prepositional phrase if it is longer than three words or suggests a distinct pause before the main clause. Examples:<p>On his way to work, Jim stopped for coffee at the diner.</p>
          <p>In those days we wrote with a pen and paper.</p>
          <p>Across the street from the library, an old man waited for a bus.</p>
        </li>
      </ol>

      <h4>Disruptive Commas</h4>
      <p>
        <strong>General guidelines</strong>
      </p>
      <ol>
        <li>Go through the paper, stopping at each comma.
        </li>
        <li>If the comma isn't necessary for clarity or called for by a rule, get rid of it.</li>
      </ol>
      <p>
        <strong>For disruptive commas between compound verbs or objects</strong>
      </p>
      <ol>
        <li>Skim your paper, stopping only at the coordinating conjunctions: and, or, nor, but, so, for, or, and yet.
        </li>
        <li>Check to see whether there is an independent clause (sentence) on both sides of the conjunction. If so, place a comma before the conjunction. If not, do not place a comma before the conjunction.<p>disruptive comma: They bought two pizzas, but ate only one.</p>
          <p>correct: They bought two pizzas but ate only one.</p>
        </li>
      </ol>
      <p>
        <strong>For disruptive commas between subjects and verbs</strong>
      </p>
      <ol>
        <li>Find the subject and verb in each of your sentences.
        </li>
        <li>Make sure that you have not separated the subject from the verb with one comma. It's often all right to have a pair of commas between a subject and verb for nonessential clauses and phrases that might be added there, but rarely is a single comma acceptable. (For more help, see our handout on nonessential clauses at http://owl.english.purdue.edu/handouts/grammar/g_commaess.html.)<p>disruptive comma: That man sitting in the train station, is the person I'm supposed to meet.</p>
          <p>correct: That man sitting in the train station is the person I'm supposed to meet.</p>
        </li>
      </ol>

      <h4>Series Commas</h4>
      <ol>
        <li>Skim your paper, stopping at the conjunctions.</li>
        <li>Check to see if these conjunctions link words, phrases, or clauses written in a series.</li>
        <li>If so, place commas after each word, phrase, or clause in the series (except the last one, as demonstrated in this sentence: no comma after the word clause). Examples:<p>People who are trying to reduce saturated fat in their diets should avoid eggs, meat, and tropical oils.</p>
          <p>The candidate promised to lower taxes, protect the environment, reduce crime, and end unemployment.</p>
        </li>
      </ol>

      <h4>Commas with Nonessential Elements</h4>
      <ol>
        <li>Skim your paper, looking for a phrase or clause in each sentence that explains or gives more information about a word or phrase that comes before it. (See also our handout, Commas With Nonessential Elements at http://owl.english.purdue.edu/handouts/grammar/g_commaess.html.)</li>
        <li>If you can delete the phrase or clause and still keep the meaning, the phrase or clause is probably nonessential and needs two commas, one before and one after (unless the phrase or clause is at the end of the sentence).</li>
        <li>As an alternate test for a nonessential phrase or clause, try saying "by the way" before it. If that seems appropriate to the meaning, the phrase or clause is probably nonessential. To understand the essential vs. nonessential distinction, compare the following sentences. In the first, the clause who cheat is essential; in the second, the clause who often cheats is nonessential.<p>Students who cheat only harm themselves.</p>
          <p>Fred, who often cheats, is just harming himself.
          </p>
        </li>
      </ol>
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

export default Commas
