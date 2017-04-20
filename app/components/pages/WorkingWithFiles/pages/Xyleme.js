import React from 'react'

const Xyleme = () => {
  return (
    <div>
      <h2>Xyleme</h2>
      <article>
        <h3>Creating a new project profile in Xyleme LCMS</h3>
        <p>Before you can preview/publish a document with a custom output template, you must first create a project profile to associate the correct output templates to the document.</p>
        <ol>
          <li>In the Document Library, right-click your document and select Project Profile. This will create a blank project profile associated with your document.</li>
          <li>Give the project profile the same title as your document so that they will sort together in the list.</li>
          <li>Expand the project profile in Outline View.</li>
          <li>Find the output profile you need (in the Document Architecture folder > OUTPUT PROFILES) and drag the output profile from the Document Library to the Project Profile you have open in the Outline View window. Note: Dragging will link the output profile so that your project will benefit from future updates to the output profile. Verify that the tiny grey link icon appears for the output profiles you link to your project profile.</li>
          <li>Click Save.</li>
        </ol>
        <p>With the Project Profile in place, whenever you preview/publish the document, the new output profile you created will appear in the list.</p>
      </article>
      <article>
        <h3>Exporting documents from Xyleme (LCMS) with a particular color scheme</h3>
        <p>To export documents from Xyleme with the Salesforce color scheme, you must first create a (Salesforce) Project Profile.</p>
      </article>
    </div>
  )
}

export default Xyleme
