import React from 'react'
import PropTypes from 'prop-types'

const The5Cs = (props) => {
  return (
    <div>
      <h2>The 5 Cs</h2>
      <table>
        <tbody>
          <tr>
            <th style={{width: '72px'}}>
              <p>The 5 Cs</p>
            </th>
            <th style={{width: '204px'}}>
              <p>Definition</p>
            </th>
            <th style={{width: '262px'}}>
              <p>Guidelines</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>Clear</p>
            </td>
            <td>
              <p>adj; 1) easily understood; without ambiguity</p>
            </td>
            <td>
              <p>Write so the reader understands you.</p>
              <ul>
                <li>use consistent and standard style</li>
                <li>avoid wordy sentences</li>
                <li>create a logical organization, and grouping, of information</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>Correct</p>
            </td>
            <td>
              <p>adj; 1) free from error or fault; true or accurate, 2) conforming to standards; proper.</p>
            </td>
            <td>
              <p>Be exact.
              </p>
              <p>Make no (few) mistakes in the information you provide.</p>
              <p>Use correct spelling and grammar.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Concise</p>
            </td>
            <td>
              <p>adj; expressing much in few words; clear and succinct</p>
            </td>
            <td>
              <p>Be brief. Write only as much information as the reader needs.</p>
              <ul>
                <li>avoid wordy sentences</li>
                <li>combine short, choppy sentences</li>
                <li>generally, favor the active over the passive voice</li>
                <li>avoid excessive use of -ion words</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>Complete</p>
            </td>
            <td>
              <p>adj; having all necessary or normal parts, components, or steps; entire</p>
            </td>
            <td>
              <p>Include all information the reader needs.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Consistent</p>
            </td>
            <td>
              <p>adj; 1) being in agreement with itself; coherent and uniform, 2) Holding true as a group; not contradictory</p>
            </td>
            <td>
              <p>Always use the same word for the same thing.</p>
              <p>Use the same sentence structure/pattern for step-by-step instructions, lists, feature/function discussions.</p>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default The5Cs
