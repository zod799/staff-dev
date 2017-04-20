import React from 'react'

const Screencasting = () => {
  return (
    <div>
      <h2>Screencasting</h2>
      <p>Listed below are the screencast setup, recording, and production details for eLearning materials in Staff Development.</p>
      <p>There are three main categories of production effort that need to be considered when recording screencast. These steps are setup, recording, and production.</p>
      <p>Theses process will outline the steps to records screencast that will be most accommodating to the widest range of deliverables. The screencast recording should be as large of resolution as possible to accommodate not only the viewer but to guarantee that the legibility of the recording.</p>
      <section>
        <h2>Step 1 - Setup</h2>
        <article>
          <h3>Camtasia Recorder</h3>
          <p>Select Area Dimension Settings:</p>
          <ul>
            <li>Custom</li>
            <li>1280x720</li>
            <li>Webcam off</li>
            <li>Audio Off (Unless you are recording voice over instruction along with your screencast, audio recording should be disabled.)</li>
          </ul>
          <img src={require('../images/img_camtasia-screencast-settings.jpg')} />
        </article>
        <article>
          <h3>Articulate  Storyline 2</h3>
          <p>Select Area Dimension Settings:</p>
          <ul>
            <li>Custom</li>
            <li>1280x720</li>
            <li>No Audio (Unless you are recording voice over instruction along with your screencast, audio recording should be disabled.)</li>
            <li>Articulate Storyline 2 has three varieties of producing a screencast. The setup for recording each of these individual productions methods are the same.</li>
          </ul>
          <img src={require('../images/img_storyline-screencast-settings.jpg')} />
        </article>

        <h2>Step 2 - Recording</h2>
        <article>
          <h3>Recording Area Setup</h3>
          <p>Regardless of the screencast recording software used to capture the on screen instruction. There are several guidelines for recording distraction free, intuitive direction:</p>
          <p>Necessary and unnecessary user interface elements:</p>
          <ul>
            <li>Hide Bookmarks bar and Windows Task bar when not necessary</li>
            <li>Exclude unnecessary menus from the recording area</li>
            <li>Use concise mouse selections and movement</li>
            <li>Use multiple recordings to accomplish long sequences of events if necessary to depict intricate interactions successfully</li>
          </ul>
        </article>

        <h2>Step 3 - Publishing</h2>
        <p>There are several options to publish your screencast recording. These are the recommended settings for 1280 x 720.</p>
        <article>
          <h3>Camtasia Recorder</h3>
          <p>When recording with Camtasia there are several options to publish your video. The two main publishing options are derived from the decision to use Camtasia Studio to complete your instruction, or the decision to use the video in a second video editing software that will re-encode the video.</p>
          <p><span>Produce and share</span> &ShortRightArrow; Custom Production Settings - MP4 - Smart Plauer (Flash/HTML5)</p>
          <div>
            <p>Publish settings for rendering final video in Camtasia:</p>
            <ul>
              <li>Controller
                <ul>
                  <li>Produce with controller (left unchecked intentionally)</li>
                </ul>
              </li>
              <li>Size:
                <ul>
                  <li>Width: 1280</li>
                  <li>Heigth: 720</li>
                </ul>
              </li>
              <li>Video Settings
                <ul>
                  <li>Frame rate: Automatic</li>
                  <li>Keyframe every: 5 Seconds</li>
                  <li>H.264 profile: Baseline</li>
                  <li>H.264 level: Auto</li>
                  <li>Encoding mode: Quality - 75%</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <p>Publish settings for video that needs re-encoding:</p>
            <ul>
              <li>Controller
                <ul>
                  <li>Produce with controller (left unchecked intentionally)</li>
                </ul>
              </li>
              <li>Size:
                <ul>
                  <li>Width: 1280</li>
                  <li>Heigth: 720</li>
                </ul>
              </li>
              <li>Video Settings
                <ul>
                  <li>Frame rate: Automatic</li>
                  <li>Keyframe every: 5 Seconds</li>
                  <li>H.264 profile: Baseline</li>
                  <li>H.264 level: Auto</li>
                  <li>Encoding mode: Quality - 100%</li>
                </ul>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section>
        <h2>RHTV</h2>
        <p>Publishing dimensions for RHTV are 1280 x 720. Videos should be web stream encoded before handing over to IMS for publishing.</p>
      </section>
    </div>
  )
}

export default Screencasting
