export default function appendStyleSheetContent() {
 document.querySelectorAll('[css-content]').forEach((el) => {
  let dataTitle = el.getAttribute('title-value') || 'Example';
  let highlightCssByNumber = el.getAttribute('line-num') || '0';
  let styleSheetContent = el.firstElementChild.innerHTML.trim() || null;

  el.className = 'css-block css-code css-content pre-block';

  if (el.hasAttribute('no-title-value')) dataTitle = null;

  // #################################################################################################################
  el.innerHTML = `
    <div class="block-header" style="${dataTitle ? '' : 'padding: 0'}">
      <div class="block-title" style="${dataTitle ? '' : 'display: none'}"> ${dataTitle}</div> 
      <i title="copy" class="copyCssTextClipboard svg copy-svg " style="${dataTitle ? '' : 'top:0.8rem'}"> </i>
      <span class="text-lang" title="Unlock Content" style="${dataTitle ? '' : 'display: none'}">CSS</span>
    </div>
    <div class="block-content">
    <div class="css-line-num" data-highlight-num="${highlightCssByNumber}"></div> 
      <pre>
        <code class="language-css">
                    ${styleSheetContent}</code></pre></div>`;
 });
}
