import { RenderPageContent } from '../../pageLoader.js';

export default function sideBarMenuShrinkBtn() {
 // on application startup with screen size less than 1000 hide the main content
 let blankSidebarContent = document.getElementById('blank-sidebar-content');
 let menuBtnContent = document.querySelector('.menu-btn-content');
 let headerTitle = document.querySelector('.side-title-header');
//  let footerTitleHeader = document.querySelector('.footer-title-header');
 let menuBtn = document.querySelector('.menu-btn');
 let HomeBtn = document.querySelector('.home-btn');
 let sideBar = document.querySelector('.sideBar');
 let sideBarSubjectMenu = document.querySelector('.sideBar-subjects-menu');
 let searchContent = document.querySelector('.search-content');
 let contentWrapper = document.querySelector('.content-wrapper');
 let sideBarHeader = document.querySelector('.sideBar-header');
 let sideBarFooter = document.querySelector('.sideBar-footer');

 let searchIconClickEvent = new Event('click');

 if (window.innerWidth < 900) {
  blankSidebarContent.addEventListener('click', () => {
   menuBtn.dispatchEvent(searchIconClickEvent);
  });
 }

 // The following :-
 // Menu shrink on click
 document.querySelectorAll('.menu-btn').forEach((el) =>
  el.addEventListener('click', (element) => {
   let isSidebarClose = sideBar.classList.contains('shrink-sideBar');
   let timeoutDisplayMenuList = isSidebarClose ? 100 : 0;
   let sideTableWidth = document.querySelector('.side-table-topic-content');

   if (isSidebarClose) {
    element.target.classList.add('close-svg');
    element.target.classList.remove('menu-svg');
    sideTableWidth.style = '';
   } else {
    element.target.classList.remove('close-svg');
    element.target.classList.add('menu-svg');
    if (sideTableWidth.offsetWidth != 0) sideTableWidth.style['width'] = sideTableWidth.offsetWidth + 150 + 'px';
   }

   sideBar.classList.toggle('shrink-sideBar');

   // if screen is less than 900 then the main content will not be displayed when menu is on
   if (window.innerWidth < 900) {
    SideBarMenuShrink_Mobile(isSidebarClose, element);
   } else {
    menuBtnContent.style['display'] = 'none';
    menuBtnContent.classList.toggle('open');

    console.log(sideTableWidth);

    setTimeout(() => {
     sideBarSubjectMenu.classList.toggle('no-display');
     if(searchContent) searchContent.classList.toggle('no-display');
     sideBarFooter.classList.toggle('no-display');
     headerTitle.classList.toggle('no-display');
     setTimeout(() => {
      menuBtnContent.style['display'] = '';
     }, 300);
    }, timeoutDisplayMenuList);
   }
  })
 );

 HomeBtn.addEventListener('click', () => {
  if (location.href != `${location.origin}/`) {
   RenderPageContent(location.origin, false, false, false, true);
  }
 });

 function SideBarMenuShrink_Mobile(isSidebarClose, element) {
  if (!isSidebarClose) {
   // sidebar close
   sideBar.classList.add('sideBar-slide-reverse');
   sideBar.classList.remove('sideBar-slide');

   sideBarHeader.style['opacity'] = '0';
   contentWrapper.style['opacity'] = '0';
   sideBarFooter.style['opacity'] = '0';
  //  footerTitleHeader.style['opacity'] = '0';

   blankSidebarContent.style['pointer-events'] = 'none';
   blankSidebarContent.style['display'] = 'none';

   setTimeout(() => {
    sideBar.style['display'] = 'none';
   }, 300);

   element.target.className = 'svg close-svg menu-btn close-small';
  } else {
   // sidebar open
   blankSidebarContent.style['display'] = 'block';
   blankSidebarContent.style['pointer-events'] = 'none';

   sideBar.classList.remove('sideBar-slide-reverse');
   sideBar.classList.add('sideBar-slide');

   sideBar.style['position'] = 'absolute';
   sideBar.style['display'] = 'block';
   blankSidebarContent.style['pointer-events'] = 'auto';

   setTimeout(() => {
    contentWrapper.style['opacity'] = '1';
    sideBarHeader.style['opacity'] = '1';
    sideBarFooter.style['opacity'] = '1';
   }, 300);

   element.target.parentElement.style['display'] = 'none';
   setTimeout(() => {
    element.target.parentElement.style['display'] = 'block';
   }, 1500);

   element.target.className = 'svg menu-svg menu-btn menu-small';
   navigator.vibrate(3);
  }
 }
}
