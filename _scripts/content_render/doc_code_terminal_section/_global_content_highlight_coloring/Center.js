import python_highlight from './_python-highlight.js';
import npm_highlight from './_npm-highlight.js';

export default function Run_Highlight_Coloring() {
 let HtmlCode = document.querySelectorAll('.html-code');
 let CssCode = document.querySelectorAll('.css-code');
 let JsCode = document.querySelectorAll('.js-code');
 let PythonCode = document.querySelectorAll('.python-code');
 let ReactCode = document.querySelectorAll('.react-code');
 let JSONText = document.querySelectorAll('.json-code');
 let CLICommand = document.querySelectorAll('.cli-command');
 
 let NpmCommand = document.querySelectorAll('.npm-command pre');

 if (
  HtmlCode.length != 0 ||
  CssCode.length != 0 ||
  JsCode.length != 0 ||
  JSONText.length != 0 ||
  ReactCode.length != 0 ||
  PythonCode.length != 0 ||
  CLICommand.length != 0
 ) {
  window.Prism.highlightAll();
 }

 if (PythonCode.length != 0) {
  python_highlight(PythonCode);
 }

 if (NpmCommand.length != 0) {
  npm_highlight(NpmCommand);
 }

 // here we are going to style sign character
}
