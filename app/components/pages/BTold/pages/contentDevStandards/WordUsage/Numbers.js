import React from 'react'
import PropTypes from 'prop-types'

const Numbers = (props) => {
  return (
    <div>
      <h2>Numbers</h2>

      <h4>Numerals</h4>
      <ul>
        <li>For uses not covered, spell out whole numbers below 10, use figures for 10 and above. Typical examples: "They had three sons and two daughters." "They had a fleet of 10 station wagons and two buses."</li>
        <li>Spell out a numeral at the beginning of a sentence. If necessary, recast the sentence.
        </li>
        <li>For ordinals:<ul>
          <li>Spell out "first" through "ninth" when they indicate sequence in time or location: "first base," "the First Amendment," "he was first in line." Starting with "10th," use figures.</li>
          <li>Use "1st," "2nd," "3rd," "4th," etc., when the sequence has been assigned in forming names. The principal examples are geographic, military or political designations such as "1st Ward," "7th Fleet" and "1st Sgt."</li>
          <li>For cardinal numbers, consult the "numerals" entry in the AP Stylebook. (p. 174)</li>
        </ul>
        </li>
        <li>In a series: Apply the appropriate guidelines: "They had 10 dogs, six cats and 97 hamsters." "They had four four-room houses, 10 three-room houses and 12 10-room houses."</li>
      </ul>

      <h4>Telephone numbers</h4>
      <ul>
        <li>Add a 1 prefix to all 800 numbers, per Legal.</li>
        <li>If extension numbers are given: "ext.2," "ext. 364," "ext.4071," use a comma to separate the main number from the extension.</li>
      </ul>
    </div>
  )
}

export default Numbers
