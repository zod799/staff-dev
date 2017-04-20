import React from 'react'

const FolderStructure = () => {
  return (

    <section >
      <h2>Folder Structure</h2>
      <div className='introduction'>
        <p>Guidelines for folders and files should be applicable across multiple systems, including G: drive, Xyleme, and any other systems added to the process.</p>
      </div>
      <article>
        <h3>Guiding Principle</h3>
        <p>Folder structure should be as shallow as possible, requiring the fewest possible clicks to reach content. At the same time, it should also be as deep as necessary, to maintain clarity and logical hierarchy.</p>
      </article>
      <article>
        <h3>Project Naming​ Structure</h3>
        <img src={require('../images/img_project-name.jpg')} />
        <ol style={{listStyleType: 'upper-alpha'}}>
          <li>Client IDs &mdash; This is a three letter code to identify the client. Over time, more codes may be added as needed.
            <ol style={{listStyleType: 'lower-alpha'}}>
              <li>EMT &mdash; Enterprise Multimedia Training
                <ol style={{listStyleType: 'upper-roman'}}>
                  <li>Folder organization &mdash; It’s important to keep graphic projects organized, because you can easily wind up with hundreds of miscellaneous files that need to be associated with a project. Here is the folder organization that exists for most projects. Exceptions &ndash; Some project types require a different folder structure. The folder structure pictured above is a starting point. Please implement the most logical file structure and sorting as possible.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>Description &mdash; A description of the project featured in the contacting folder system.</li>
          <li>Multiple word descriptions &mdash; Descriptions that contain multiple words should be written in "camel case" For example, "ProjectDescriptionsWithMultipleWords" (no spaces, each new word capitalized).</li>
        </ol>
      </article>
      <article>
        <h3>Folders</h3>
        <ul>
          <li>Project Folder
            <ul>
              <li>Documentation
                <ul>
                  <li>Intake</li>
                  <li>Scripts
                    <ul>
                      <li>_archive</li>
                      <li>translation</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Production
                <ul>
                  <li>App-1
                    <ul>
                      <li>_archive</li>
                      <li>output</li>
                    </ul>
                  </li>
                  <li>App-2
                    <ul>
                      <li> _archive</li>
                      <li>output</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Audio
                <ul>
                  <li>Music
                    <ul>
                      <li>original-source-file</li>
                      <li>output</li>
                    </ul>
                  </li>
                  <li>Narration
                    <ul>
                      <li>original-source-file</li>
                      <li>output</li>
                    </ul>
                  </li>
                  <li>SFX
                    <ul>
                      <li>original-source-file</li>
                      <li>output</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Graphics
                <ul>
                  <li>raster
                    <ul>
                      <li>_archive</li>
                    </ul>
                  </li>
                  <li>Vector
                    <ul>
                      <li>_archive</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Published-output</li>
              <li>Shared assets</li>
              <li>Storyboards
                <ul>
                  <li>_archive</li>
                </ul>
              </li>
              <li>Translation
                <ul>
                  <li>language-1
                    <ul>
                      <li>language production</li>
                      <li>language publish output</li>
                    </ul>
                  </li>
                  <li>output-for-translation</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <aside>
          <img src={require('../images/img_folder-structure.jpg')} />
        </aside>
      </article>
    </section>

  )
}

export default FolderStructure
