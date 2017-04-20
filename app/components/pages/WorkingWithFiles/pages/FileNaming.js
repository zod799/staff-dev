import React from 'react'

const FileNaming = () => {
  return (
    <div>
      <h2>File Naming</h2>
      <img src={require('../images/img_fileName.jpg')} />
      <ol style={{listStyleType: 'upper-alpha'}}>
        <li>Month &mdash; Two character designations for the month a file is created. For example, “01” is January, “02” is February, and so on.</li>
        <li>Day &mdash; Two character designations for the day the file is created. For example, “01” is the first day of the month.
          <ol style={{listStyleType: 'lower-alpha'}}>
            <li>All values for the date should be maintained accurately for the day and month the file was last edited. For example, if a user has created a file January 1, the date section of the naming convention should read as "0101". If a user opens and edits a file, the name should be updated to January 2. The Save As… function should be used and the date section updated to "0102", saving a new iteration of the file.</li>
          </ol>
        </li>
        <li>Number &mdash; This is the version number of the file.
          <ol style={{listStyleType: 'lower-alpha'}}>
            <li>The number designation needs to be changed after any alteration has been made to the file.</li>
            <li>This number will increase each time the file is opened and altered.
              <ol style={{listStyleType: 'upper-roman'}}>
                <li>When a file is opened and edited a Save As… function should be initialized. This will ensure that multiple iterations of the file will exist and that iterative phases of the development process can be accessed.
                  <ol style={{listStyleType: 'decimal'}}>
                    <li>Saving in increments every 15-30 minutes is recommended to insure that a significant amount of work effort cannot be lost due to unexpected system errors or crashes.</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>Client ID &mdash; This is a three letter code to identify the client. Over time, more codes may be added as needed.
          <ol style={{listStyleType: 'lower-alpha'}}>
            <li>EMT &mdash; Enterprise Multimedia Training
              <ol style={{listStyleType: 'upper-roman'}}>
                <li>Refer to Project Name Client ID Description for more detail (Page 1)</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>File Description &mdash; A description of the file name featured.
          <ol style={{listStyleType: 'lower-alpha'}}>
            <li>Multiple word descriptions &mdash; Descriptions that contain multiple words should be written in camel case. For example, "ProjectDescriptionsWithMultipleWords".</li>
          </ol>
        </li>
        <li>File Extension &mdash; This section is automatically generated suffix that designates the file format.</li>
      </ol>
      <h2>Folder Structure + File Name = Path</h2>
      <p>Folder structure and file naming are related when they combine to form a path. Path length limitations can be an issue, for example - loading a SCORM package into Cornerstone LMS.</p>
      <p>(Per Lauren V., 5/2/16): "The file path has to be less than 260 characters…… Sam Rogers had issues with content that SmartFirm is developing for us…… The fully qualified file name has to be less than 260 characters, and the directory name has to be less than 248."</p>
    </div>
  )
}

export default FileNaming
