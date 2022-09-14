import enable_sideTableContent from './enable_sideTableContent.js';

export default function render_table_contents() {
 const allTitleInSubject = ['.sub-title', '.sub-sub-title', '.sub-sub-sub-title'];
 const getAllTitleInSubject = document.querySelectorAll(allTitleInSubject);
 const mainTitle = document.querySelector('.main-title');
 const notTableContent = document.querySelector('.no-table-content');
 const hasTableContent = document.querySelector('.table-content');
 const sideTableTopicContent = document.querySelector('.side-table-topic-content');

 let tableContentHTML = '';
 let sideTableContentHTML = '';
 let allList = '';
 let navTitle_className = '';

 if (getAllTitleInSubject.length != 0 && !notTableContent) {
  getAllTitleInSubject.forEach((element, index) => {
   if (element.classList.contains('sub-title')) navTitle_className = 'nav-sub-title';
   if (element.classList.contains('sub-sub-title')) navTitle_className = 'nav-sub-sub-title';
   if (element.classList.contains('sub-sub-sub-title')) navTitle_className = 'nav-sub-sub-sub-title';
   element.id = `${index}`;
   allList += `<li class="${navTitle_className}"> <a href="#${index}"> ${element.innerHTML} </a></li>`;
  });

  tableContentHTML = `
   <div class="table-topic-content">
    <h1>Table Content</h1>
    <ul class="table-list-content">
      ${allList}
    </ul>
   </div>
   `;

  sideTableContentHTML = `
    <h1>Table Content</h1>
    <ul class="side-table-list-content">
      ${allList}
    </ul>
   `;

  if (hasTableContent) {
   hasTableContent.innerHTML = tableContentHTML;
  } else {
   if (mainTitle) mainTitle.insertAdjacentHTML('afterend', tableContentHTML);
  }

  if (window.innerWidth > 1900) {
   sideTableTopicContent.innerHTML = '';

   if (mainTitle) {
    sideTableTopicContent.innerHTML += sideTableContentHTML;
    enable_sideTableContent(true);
   }
  }

  let allTablesContent = ['.table-list-content li a', '.side-table-list-content li a'];

  // disable middle click on table content list
  document.querySelectorAll(allTablesContent).forEach((element) => {
   element.addEventListener('auxclick', (ev) => {
    if (ev.button === 1) ev.preventDefault();
   });
  });

  setTimeout(() => {
   // animation effect
   document.querySelectorAll('.table-list-content li').forEach((el, index) => {
    setTimeout(() => {
     el.classList.add('show');
    }, 100 + index * 100);
   });
  }, 600);
 } else {
  if (window.innerWidth > 1900) {
   enable_sideTableContent(false);
  }
 }
}
