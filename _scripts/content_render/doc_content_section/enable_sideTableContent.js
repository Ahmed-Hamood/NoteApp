let getAllSideTableTitles = null;
let titleSections = null;
let tablePosition = 0;

export default function enable_sideTableContent(active) {
 let element = document.querySelector('.table-topic-content');
 let urlSearchParams = new URLSearchParams(window.location.search);

 const allTitleInSideMenu = ['.nav-sub-title', '.nav-sub-sub-title', '.nav-sub-sub-sub-title'];
 const allTitleInDocumentContent = ['.sub-title', '.sub-sub-title', '.sub-sub-sub-title', 'get-title'];
 getAllSideTableTitles = document.querySelectorAll(allTitleInSideMenu);
 titleSections = document.querySelectorAll(allTitleInDocumentContent);

 console.log('Enter Scroll');
 document.querySelector('.side-table-topic-content').classList.remove('show');

 if (active) {
  // console.log('Active scroll event');

  if (urlSearchParams.has('newTab')) {
   let sideTableWidth = document.querySelector('.side-table-topic-content');
   sideTableWidth.style['opacity'] = '0';
   sideTableWidth.style['display'] = 'block';
   sideTableWidth.style['width'] = sideTableWidth.offsetWidth + 150 + 'px';
  }

  tablePosition = element.scrollHeight + 100;
  document.getElementById('doc-content-render-container').addEventListener('scroll', EnableScrollTableMenu);
 } else {
  document.getElementById('doc-content-render-container').removeEventListener('scroll', EnableScrollTableMenu);
 }
}

function EnableScrollTableMenu(e) {
 let href = null;
 let currentTitleSection = '';

 if (tablePosition <= e.target.scrollTop) {
  document.querySelector('.side-table-topic-content').classList.add('show');
 } else {
  document.querySelector('.side-table-topic-content').classList.remove('show');
 }

 titleSections.forEach((section, index) => {
  if (e.target.scrollTop >= section.offsetTop) currentTitleSection = index;
 });

 getAllSideTableTitles.forEach((link) => {
  link.classList.remove('nav-active');
  href = link.children[0].getAttribute('href').substring(1);
  if (href == currentTitleSection) {
   link.classList.add('nav-active');
  }
 });
}
