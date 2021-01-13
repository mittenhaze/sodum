/* Enter raw mode and keypress listener code snippet:
https://davidwalsh.name/node-raw-mode
https://thisdavej.com/making-interactive-node-js-console-apps-that-listen-for-keypress-events
*/

// Enter raw mode
const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

// Start the keypress listener
process.stdin.on('keypress', (str, key) => {
  // Pressing Ctrl + D sends the U+0004 character.
  if (key.sequence === '\u0004') {
    console.log()
    process.exit()
  } else {
    process.stdout.write(str)
  }
})
