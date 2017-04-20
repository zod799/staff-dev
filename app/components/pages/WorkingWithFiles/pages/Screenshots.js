import React from 'react'

const Screenshots = () => {
  return (
    <div>
      <h2>Screenshots for Job Aids</h2>
      <ul>
        <li>Does the screen contain confidential information? If yes, replace the information with dummy text/numbers or edit after taking the screen shot.</li>
        <li>Is the pointer in the way? Is the cursor included? Before taking your screen shot, make sure that the pointer and cursor are correctly positioned.</li>
        <li>Are the screen capture (or image resolution) settings at 96 dpi? This is the default setting for all SnagIt profiles.</li>
        <li>Remove web browser from screen capture – show only pertinent areas of web-based applications.</li>
        <li>Grab a screen shot at the size you plan to use it, resizing screenshots can make them soft and fuzzy.</li>
        <li>Apply SnagIt borders, callouts and numbers to a screen capture, if needed.</li>
      </ul>
      <article>
        <h3>Snag It Specifications</h3>
        <section>
          <ul>
            <li>Black Border, No Shadow</li>
            <li>Borders: Bottom, Right</li>
            <li>Outline: 1px (RGB:0)</li>
            <li>black-border-no-shadow.png</li>
            <li>Gray Border, Shadow</li>
            <li>Borders: Bottom, Right</li>
            <li>Outline: 1px (RGB:128)</li>
            <li>Shadow: SE, 5px</li>
          </ul>
        </section>
        <section>
          <ul>
            <li>gray-border-shadow.png</li>
            <li>Blue Callout</li>
            <li>Shape: Rectanglet</li>
            <li>Outline Color: R-0, G-0, B-255</li>
            <li>Fill Color: Transparent</li>
            <li>Width: 2px or 3px (depending on image)</li>
            <li>Shadow: SE, 7px</li>
          </ul>
          <img src={require('../images/img_blue-callout.jpg')} />
        </section>
        <section>
          <ul>
            <li>Orange Callout</li>
            <li>Shape: Rectangle</li>
            <li>Outline Color: R-247, G-150, B-70</li>
            <li>Fill Color: Transparent</li>
            <li>Width: 2px or 3px (depending on image)</li>
            <li>Shadow: SE, 7px</li>
          </ul>
          <img src={require('../images/img_orange-callout.jpg')} />
        </section>
        <section>
          <p>Stamps</p>
          <p>Download and install Numbers package from Snagit’s website.  This package is exclusive to Snagit 13 (Windows) and Snagit 4 (Mac).</p>
        </section>
      </article>
    </div>
  )
}

export default Screenshots
