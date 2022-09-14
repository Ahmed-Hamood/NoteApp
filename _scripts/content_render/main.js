import Run_Highlight_Coloring from './doc_code_terminal_section/_global_content_highlight_coloring/Center.js';
import tabSwitchContentRender from './doc_content_section/tabSwitchRender/tabSwitchContentRender.js';
import blockContentTabSwitch from './doc_content_section/tabSwitchRender/blockContentTabSwitch.js';

import topicMenuContentActive from './doc_menu-topics-section/topicMenuContent.js';
import enableTableContent from './doc_menu-topics-section/enableTableContent.js';
import enable_sideTableContent from './doc_content_section/enable_sideTableContent.js';

import appendRefLinks from './doc_content_section/Ref-Links/appendRefLinks.js';
import imageLinkChange from './doc_content_section/image-content/imageLinkChange.js';
import imageViewer from './doc_content_section/image-content/imageViewer.js';
import Collapsible_content from './doc_content_section/collapsible_content.js';

import auto_top_scroll from './doc_content_section/auto_top_scroll.js';
import render_table_contents from './doc_content_section/render_table_contents.js';

import build_js_block from './doc_code_terminal_section/js_code_content/start.js';
import build_python_block from './doc_code_terminal_section/python_code_content/start.js';
import build_HTML_block from './doc_code_terminal_section/hyperText_content/start.js';
import build_css_block from './doc_code_terminal_section/styleSheet_content/start.js';
import build_terminal_block from './doc_code_terminal_section/terminal_content/start.js';
import build_cli_block from './doc_code_terminal_section/cli_content/start.js';
import navToHashPos from './doc_content_section/Ref-Links/navToHashPos.js';

export default function startup_contentRender(ref_Pos = null, hasFolder = false) {
 if (document.querySelector('.subject-topics-list-container')) {
  // get all topic menu links
  topicMenuContentActive();

  // active table content in menu document
  enableTableContent();

  if (window.innerWidth > 1900) enable_sideTableContent(false);

  if (window.innerWidth > 1500) {
   document.querySelector('.nav-header-container').style['max-width'] = '1300px';
   document.getElementById('doc-content-render').style['max-width'] = '1300px';
  }
 } else {
  document.querySelector('.nav-header-container').style['max-width'] = '';
  document.getElementById('doc-content-render').style['max-width'] = '';

  // is_documentation.style['width'] = '';
  // add top scroll button a
  auto_top_scroll();

  // render table content
  render_table_contents();

  // tab content switch and render
  tabSwitchContentRender()
  blockContentTabSwitch();
  // -------------------------------------
  // -------------------------------------

  build_js_block();
  build_python_block();
  build_HTML_block();
  build_css_block();
  build_terminal_block();
  build_cli_block();

  // ------------------------------------
  // -------------------------------------
  // -------------------------------------

  setTimeout(() => {
   Run_Highlight_Coloring();
  }, 500);

  // -------------------------------------
  // -------------------------------------
  // -------------------------------------



  // add ref links to every link
  appendRefLinks(hasFolder);

  // set all images source with proper url path
  imageLinkChange();

  // create a view content for each image
  imageViewer();

  // create a Collapsible content
  Collapsible_content();

  // on link ref open navigate to certain topic title
  navToHashPos(ref_Pos);

  // On double click disable code-num-list pointer event
  // so we can manually highlight line for copy
  // or able to use middle mouse button to drag the code content horizontal
  // also on double click we expand code content height
  document.querySelectorAll('.block-content').forEach((element) => {
   element.addEventListener('dblclick', (ev) => {
    let codeMaxHeight = element.parentElement.style.maxHeight;
    element.parentElement.style.maxHeight = codeMaxHeight == '' ? 'none' : '';
   });

   // mouse middle click to enable and disable point event on num list
   element.addEventListener('mousedown', (el) => {
    if (el.button == 1) {
     if (element.children[0].hasAttribute('pointer-event')) element.children[0].style['pointer-events'] = 'none';
     setTimeout(() => {
      if (element.children[0].hasAttribute('pointer-event')) element.children[0].style['pointer-events'] = 'auto';
     }, 500);
    }
   });
  });
 }
 //  if (new URLSearchParams(window.location.search).has('newTab') && window.innerWidth > 1000) {
 //   document.getElementById('doc-content-render').innerHTML += "<a href='/' class='return-home-btn'><i class='svg home-svg home-btn'></i></a>";

 //  }
 // ##################################################################################
}
