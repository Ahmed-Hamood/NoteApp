export default function auto_top_scroll() {
 let doc_content_render_container = document.getElementById('doc-content-render-container');

 if (doc_content_render_container.scrollHeight > doc_content_render_container.clientHeight) {
  document.getElementById('doc-content-render').innerHTML += "<div class='auto-top-scroll'></div>";
  document.querySelector('.auto-top-scroll').addEventListener('click', () => {
   doc_content_render_container.scrollTop = 0;
  });
 }
}
