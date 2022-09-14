export default function appendHyperTextContent() {
 document.querySelectorAll('[html-content]').forEach((el) => {
  let dataTitle = el.getAttribute('title-value') || 'An Example';
  let highlightLineByNumber = el.getAttribute('line-num') || '0';
  let TextContent = el.firstElementChild.innerHTML.trim() || null;
  let svgLockElement = '';
  let HyperTextLangElement = '';
  let copyHyperTextClipboard = '';

  el.className = 'html-block html-code html-content pre-block';

  if (el.hasAttribute('no-title-value')) dataTitle = null;
  if (el.hasAttribute('no-line-num')) highlightLineByNumber = null;

  if (highlightLineByNumber && dataTitle) {
   svgLockElement = `<i class="svg lock-svg hyperText-lock-btn" style="top: 0.65rem; padding:0.65rem"></i>`;
   HyperTextLangElement = `<span class="text-lang" title="Unlock Content" style="margin-right: 1.7rem">HTML</span>`;
   copyHyperTextClipboard = `<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 3.0rem;"></i>`;
  } else if (!highlightLineByNumber && dataTitle) {
   svgLockElement = `<i class="svg lock-svg hyperText-lock-btn" style="display: none"></i>`;
   HyperTextLangElement = `<span class="text-lang" title="Unlock Content" style='margin-right: 0rem'>HTML</span>`;
   copyHyperTextClipboard = `<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 3.0rem;"> </i>`;
  } else if (highlightLineByNumber && !dataTitle) {
   HyperTextLangElement = `<span class="text-lang" title="Unlock Content" style='display: none'>HTML</span>`;
   svgLockElement = `<i class="svg lock-svg hyperText-lock-btn" style="top: 3.2rem; padding: 0.7rem"></i>`;
   copyHyperTextClipboard = `<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 1.0rem;"> </i>`;
  } else if (!highlightLineByNumber && !dataTitle) {
   svgLockElement = `<i class="svg lock-svg hyperText-lock-btn" style="display: none"></i>`;
   HyperTextLangElement = `<span class="text-lang" title="Unlock Content" style='display: none'>HTML</span>`;
   copyHyperTextClipboard = `<i title="copy" class="copyHyperTextClipboard svg copy-svg" style="top: 0.8rem;"></i>`;
  }

  // #################################################################################################################
  el.innerHTML = `
    <div class="block-header" style="${dataTitle ? '' : 'padding: 0'}">
      <div class="block-title" style="${dataTitle ? '' : 'display: none'}"> ${dataTitle}</div> 
      ${HyperTextLangElement}
      ${copyHyperTextClipboard}
      ${svgLockElement}
    </div>
    <div class="block-content">
    <div class="hyperText-line-num" data-highlight-num="${highlightLineByNumber}" style="${highlightLineByNumber ? '' : 'display: none'}" pointer-event="on"> </div> 
      <pre style="${highlightLineByNumber ? '' : 'user-select: text;'}">
        <code class="language-html">${TextContent}</code>
      </pre>
    </div>
  `;
 });
}
