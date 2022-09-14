export default function appendCodeContent() {
 let AllQuery = ['[js-content]', '[js-jsx-content]', '[js-json-content]'];

 document.querySelectorAll(AllQuery).forEach((el) => {
  let dataTitle = el.getAttribute('title-value') || 'Example';
  let highlightCodeByNumber = el.getAttribute('line-num') || '0';
  let codeContent = el.firstElementChild.innerHTML.trim() || null;
  let language_type = '';

  let lineBreaks = codeContent.match(/\n/gi) || [];
  // set lock position if we have a single line code only
  let lockPosition = lineBreaks.length == 0 ? 'top: 0.8rem;right:2.2rem;' : 'top: 2.9rem;';

  let svgLockElement = '';
  let codeLangElement = '';
  let copyJSCodeClipboard = '';

  if (el.hasAttribute('js-content')) {
   language_type = 'language-javascript js';
   el.className = 'js-block js-code js-content pre-block';
  }
  if (el.hasAttribute('js-jsx-content')) {
   language_type = 'language-jsx js';
   el.className = 'js-block js-code react-code js-content pre-block';
  }
  if (el.hasAttribute('js-json-content')) {
   language_type = 'language-json';
   el.className = 'js-block json-code js-content pre-block';
  }

  if (el.hasAttribute('no-title-value')) dataTitle = null;
  if (el.hasAttribute('no-line-num')) highlightCodeByNumber = null;

  if (highlightCodeByNumber && dataTitle) {
   svgLockElement = `<i class="svg lock-svg js-lock-btn" style="top: 0.65rem; padding:0.62rem"></i>`;
   codeLangElement = `<span class="text-lang" title="Unlock Content" style="margin-right: 0">JavaScript</span>`;
   copyJSCodeClipboard = `<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 3.0rem;"></i>`;
  } else if (!highlightCodeByNumber && dataTitle) {
   svgLockElement = `<i class="svg lock-svg js-lock-btn" style="display: none"></i>`;
   codeLangElement = `<span class="text-lang" title="Unlock Content" style='margin-right: 0rem; padding-right: 0.7rem;'>JavaScript</span>`;
   copyJSCodeClipboard = `<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 3.2rem;"> </i>`;
  } else if (highlightCodeByNumber && !dataTitle) {
   codeLangElement = `<span class="text-lang" title="Unlock Content" style='display: none'>JavaScript</span>`;
   svgLockElement = `<i class="svg lock-svg js-lock-btn" style="${lockPosition} padding: 0.7rem"></i>`;
   copyJSCodeClipboard = `<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>`;
  } else if (!highlightCodeByNumber && !dataTitle) {
   svgLockElement = `<i class="svg lock-svg js-lock-btn" style="display: none"></i>`;
   codeLangElement = `<span class="text-lang" title="Unlock Content" style='display: none'>JavaScript</span>`;
   copyJSCodeClipboard = `<i title="copy" class="copyJSCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>`;
  }

  // #################################################################################################################
  el.innerHTML = `
    <div class="block-header" style="${dataTitle ? '' : 'height: 0'}">
      <div class="block-title" style="${dataTitle ? '' : 'display: none'}"> ${dataTitle} </div> 
      ${codeLangElement}
      ${copyJSCodeClipboard}
      ${svgLockElement}
    </div>
    <div class="block-content">
    <div class="js-line-num" data-highlight-num="${highlightCodeByNumber}" style="${highlightCodeByNumber ? '' : 'display: none'}" pointer-event="on"> </div> 
      <pre style="${highlightCodeByNumber ? '' : 'user-select: text;'}">
        <code class="${language_type}">
                    ${codeContent}</code></pre></div>`;

 });
}
