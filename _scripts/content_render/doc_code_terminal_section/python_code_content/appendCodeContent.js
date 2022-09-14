export default function appendCodeContent() {
 let AllQuery = document.querySelectorAll('[python-content]');

 AllQuery.forEach((el) => {
  let dataTitle = el.getAttribute('title-value') || 'Example';
  let highlightCodeByNumber = el.getAttribute('line-num') || '0';
  let codeContent = el.firstElementChild.innerHTML.trim() || null;
  let lineBreaks = [];

  if (codeContent) {
   lineBreaks = codeContent.match(/\n/gi) || [];
  }
  // set lock position if we have a single line code only
  let lockPosition = lineBreaks.length == 0 ? 'top: 3rem;right:0.4rem;' : 'top: 2.9rem;';

  let svgLockElement = '';
  let codeLangElement = '';
  let copyPythonCodeClipboard = '';

  if (el.hasAttribute('python-content')) el.className = 'python-block python-code python-content pre-block';

  if (el.hasAttribute('no-title-value')) dataTitle = null;
  if (el.hasAttribute('no-line-num')) highlightCodeByNumber = null;

  if (highlightCodeByNumber && dataTitle) {
   codeLangElement = `<span class="text-lang" title="Unlock Content" style="">Python</span>`;
   svgLockElement = `<i class="svg lock-svg python-lock-btn" style="top: 0.65rem; padding:0.62rem"></i>`;
   copyPythonCodeClipboard = `<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 3.5rem;"></i>`;
  } else if (!highlightCodeByNumber && dataTitle) {
   svgLockElement = `<i class="svg lock-svg python-lock-btn" style="display: none"></i>`;
   codeLangElement = `<span class="text-lang" title="Unlock Content" style='margin-right: 0rem; padding-right: 0.7rem;'>Python</span>`;
   copyPythonCodeClipboard = `<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 3.2rem;"> </i>`;
  } else if (highlightCodeByNumber && !dataTitle) {
   codeLangElement = `<span class="text-lang" title="Unlock Content" style='display: none'>Python</span>`;
   svgLockElement = `<i class="svg lock-svg python-lock-btn" style="${lockPosition} padding: 0.7rem"></i>`;
   copyPythonCodeClipboard = `<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>`;
  } else if (!highlightCodeByNumber && !dataTitle) {
   svgLockElement = `<i class="svg lock-svg python-lock-btn" style="display: none"></i>`;
   codeLangElement = `<span class="text-lang" title="Unlock Content" style='display: none'>Python</span>`;
   copyPythonCodeClipboard = `<i title="copy" class="copyPythonCodeClipboard svg copy-svg" style="top: 0.8rem;"></i>`;
  }

  //   fetch('/get', {
  //    headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //    },
  //    method: 'GET',
  //   })
  //    .then((response) => response.json())
  //    .then((data) => {
  //     console.log(data.data.code);
  //     codeContent =  data.data.code.code;
  // });
  el.innerHTML = `
    <div class="block-header" style="${dataTitle ? '' : 'height: 0'}">
      <div class="block-title" style="${dataTitle ? '' : 'display: none'}"> ${dataTitle} </div> 
      ${codeLangElement}
      ${copyPythonCodeClipboard}
      ${svgLockElement}
    </div>
    <div class="block-content">
    <div class="python-line-num" data-highlight-num="${highlightCodeByNumber}" style="${highlightCodeByNumber ? '' : 'display: none'}" pointer-event="on"> </div> 
      <pre style="${highlightCodeByNumber ? '' : 'user-select: text;'}">
        <code class="language-python">
                    ${codeContent}</code></pre></div>`;

 });

 // #################################################################################################################

 //  fetch('/home', {
 //   headers: {
 //    Accept: 'application/json',
 //    'Content-Type': 'application/json',
 //   },
 //   method: 'POST',
 //   body: JSON.stringify({ code: codeContent }),
 //  })
 //   .then(function (res) {
 //    console.log(res);
 //   })
 //   .catch(function (res) {
 //    console.log(res);
 //   });
}
