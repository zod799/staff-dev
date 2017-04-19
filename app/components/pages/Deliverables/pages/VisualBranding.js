import React from 'react'

const VisualBranding = (props) => {
  return (
    <div>
      <h2>Visual Branding</h2>
      <div>
        <h3>EMT Color Palette</h3>
        <p>Our color palette is active, energizing, modern, bright, clean, pure, friendly and fresh. Color is an important part of the EMT look and feel. Our colors speak to our viewers before they have a chance to recognize related words or graphics. It sets a mood and expresses our personality.</p>
      </div>
      <div>
        <h3>Primary:</h3>
        <ul className='block-left no-bullets'>
          <li>Red: 167, 10, 37  #a70a25</li>
          <li>Blue: 23, 151, 192 #1797c0 (associated with Salesforce trainings)</li>
          <li>Grey: 88, 88, 90 #58585a</li>
        </ul>
        <div className='block-right'>
          <img src={require('../images/img_colors_primary.png')} />
        </div>
      </div>
      <div>
        <h3>Secondary:</h3>
        <div className='block-left'>
          <ul className='no-bullets'>
            <li>Gold: 243, 172, 30 #ff9933  (associated with tablet trainings)</li>
            <li>Orange: 233, 113, 23 #ff6600</li>
            <li>Green: 125, 198, 34  #7dc622</li>
            <li>Teal: 71, 185, 174 #47b9ae</li>
            <li>Grey 2: 132, 128, 128 #848080</li>
            <li>Grey 3: 182, 181, 181 #b7b5b5</li>
          </ul>
          <p>(these can be used as spot colors or to identify types of trainings)</p>
        </div>
        <div className='block-right'>
          <img src={require('../images/img_colors_secondary.png')} />
        </div>
      </div>
      <div>
        <h3>RH Branding Guidelines</h3>
        <p>Also see <a href='http://connect/rh-wiki/Pages/Color.aspx' target='_blank'>IMS/BobNet Wiki</a> regarding color</p>
      </div>
      <div>
        <h3>Protiviti Guidelines and Colors</h3>
        <p>Protiviti logos are found on <a href='http://intranet/bobnet/our-brands/logo-powerpoint-center/protiviti/' target='_blank'>BobNet</a>.</p>
        <p>Refer to the Style Guide mentioned above for use of logos.</p>
        <p>Protiviti’s official color, fonts and downloadable pdf style guide are found on iShare (search words: Style Guide).
Protiviti colors are under review. Please see iShare for the most current updates.</p>
        <p>NOTE:  Check with project owner regarding color schemes. Protiviti may brand our learning products using unique color schemes that are complimentary to Protiviti colors.</p>
        <p>Protiviti marketing contact: Jennifer Matthews</p>
      </div>
    </div>
  )
}

export default VisualBranding
