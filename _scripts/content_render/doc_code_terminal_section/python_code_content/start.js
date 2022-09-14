import appendCodeContent from './appendCodeContent.js';
import appendCodeLinesNumber from './appendCodeLinesNumber.js';
import EnableBlockLockJSCodeContent from './EnableBlockLockPythonCodeContent.js';
import EnableCopyClipboardJSCodeText from './EnableCopyClipboardPythonCodeText.js';

export default function start_python_code() {
 appendCodeContent();
 appendCodeLinesNumber();
 EnableBlockLockJSCodeContent();
 EnableCopyClipboardJSCodeText();
}
