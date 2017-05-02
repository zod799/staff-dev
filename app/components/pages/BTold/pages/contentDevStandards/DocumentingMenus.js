import React from 'react'
import PropTypes from 'prop-types'

const DocumentingMenus = (props) => {
  return (
    <div>
      <h2>Documenting Menus</h2>
      <p className='note'>
        <strong>Note:</strong>
        The following text is from the Microsoft Manual of Style from the topic on Menus and Commands. Text has been edited for brevity.
      </p>
      <p>Menus contain commands. Dialog boxes contain command buttons and options. Do not refer to a command as a menu item (except in programming documents about interfaces), a choice, or an option.</p>
      <p>Use click when referring to selecting or choosing commands, options, and dialog box buttons in procedures.</p>
      <h3>Menu terminology</h3>
      <p className='note'>
        <strong>Note:</strong> RHI standards recognize both the following as acceptable methods for documenting menus:
        <ul>
          <li>From the <strong>Tempus Fugit</strong> menu, click <strong>Company</strong>.</li>
          <li>Click <strong>Tempus Fugit &gt; Company</strong>.</li>
        </ul>
      </p>
      <ul>
        <li>When referring to a specific menu, lowercase the word menu, as in "the Edit menu."</li>
        <li>Avoid the words cascading, pull-down, drop-down, or pop-up to describe menus except in some programming documents.</li>
        <li>Refer to unavailable commands and options as unavailable, not as dimmed, disabled, or grayed. Also, if you are describing the appearance of an unavailable command or option, you can use dimmed, but not grayed or disabled.
          <p><strong>Correct</strong></p>
          <blockquote>
            <p>There are several unavailable commands on the <strong>Edit</strong> menu.</p>
            <p>If the <strong>Paste</strong> command is unavailable, first select the text you want to paste, and then choose <strong>Cut</strong> or <strong>Copy</strong>.</p>
            <p>The <strong>Paste</strong> command appears dimmed because it is unavailable.</p>
            <p>A disabled control is unavailable to the user.</p>
          </blockquote>

          <p><strong>Incorrect</strong></p>
          <blockquote>
            <p>There are several dimmed commands on the <strong>Edit</strong> menu.</p>
            <p>If the <strong>Paste</strong> command is disabled, first select the text you want to paste, and then choose <strong>Cut</strong> or <strong>Copy</strong>.</p>
            <p>The <strong>Paste</strong> command appears grayed because it is unavailable. </p>
          </blockquote>
        </li>
        <li>Names of menus and menu commands are distinct elements on the screen. Do not combine the two names into one.
          <p><strong>Correct</strong></p>
          <blockquote>
            <p>On the <strong>File</strong> menu, click <strong>Open</strong>. </p>
          </blockquote>

          <p><strong>Incorrect</strong></p>
          <blockquote>
            <p>Click <strong>File</strong> <strong>Open</strong>.</p>
          </blockquote>
        </li>
        <li>In general, mention the name of the menu the first time you refer to a particular command. However, if the location of the command is clear from the immediate context (for example, a topic about the Edit menu), you may not need to mention the menu name.
          <p><strong>Correct</strong></p>
          <blockquote>
            <p>In <strong>Control Panel</strong>, click the <strong>File</strong> menu, and then click <strong>Open</strong>.</p>
            <p>If the <strong>Paste</strong> command on the <strong>Edit</strong> menu is unavailable, first select the text you want to paste, and then choose <strong>Cut</strong> or <strong>Copy</strong>. You now should be able to choose <strong>Paste</strong> to insert the text in its new location.</p>
          </blockquote>
        </li>
        <li>You can open a submenu by pointing to the menu name.
          <p><strong>Correct</strong></p>
          <blockquote>
            <p>Click the <strong>Start</strong> button, and then point to <strong>Documents</strong>.</p>
            <p>On the <strong>File</strong> menu, point to <strong>New</strong>, and then click <strong>Folder</strong>.</p>
          </blockquote>

          <p><strong>Incorrect</strong></p>
          <blockquote>
            <p>Click the <strong>Start</strong> button, and then choose <strong>Documents</strong>.</p>
            <p>On the <strong>File</strong> menu, choose <strong>New</strong>, and then choose <strong>Folder</strong>.</p>
          </blockquote>
        </li>
      </ul>
      <h3>Style of menu names and commands</h3>
      <ul>
        <li>Do not use the possessive form of menu and command names.
          <p><strong>Correct</strong></p>
          <blockquote>
            <p>The <strong>Open</strong> command on the <strong>File</strong> menu opens the file.</p>
          </blockquote>

          <p><strong>Incorrect</strong></p>
          <blockquote>
            <p>The <strong>File</strong> menu's <strong>Open</strong> command opens the file.</p>
          </blockquote>
        </li>
        <li>Follow the interface for capitalization, which usually will be title caps, and use bold formatting. Do not capitalize the identifier such as menu or command.
          <p><strong>Correct</strong></p>
          <blockquote>
            <p>On the <strong>Options</strong> menu, click <strong>Keep Help on Top</strong>.</p>
          </blockquote>

          <p><strong>Incorrect</strong></p>
          <blockquote>
            <p>On the <strong>Options</strong> menu, click <strong>Keep Help On Top</strong>.</p>
          </blockquote>
        </li>
      </ul>
    </div>
  )
}

export default DocumentingMenus
