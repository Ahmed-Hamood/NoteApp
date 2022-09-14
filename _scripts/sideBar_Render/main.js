import CreateSubjectsMenuList from '../../Subjects_list/import_create_menu_list.js';
import EnableSidebarMenuList from './menu/EnableSidebarMenuList.js';
import sidebarSearchBtn from './header/sidebarSearchBtn.js';
import sideBarMenuShrinkBtn from './header/sideBarMenuShrinkBtn.js';

const urlSearchParams = new URLSearchParams(window.location.search);

export default function startup_SideBarRender() {
 if (!urlSearchParams.has('newTab')) {
  CreateSubjectsMenuList();
  EnableSidebarMenuList();
  sidebarSearchBtn();
  sideBarMenuShrinkBtn();
  console.log('Startup SideBar Render');
 }
}

// #############################################################
// The following :-
// Shortcuts
// #############################################################

window.addEventListener('keyup', function (event) {
 // switch theme when press Shift + T Key
 if (event.shiftKey && event.key == 'T') {
  document.querySelector('html').toggleAttribute('light-theme');
 }

 // invoke the searchIcon click when press Shift + S
 if (event.shiftKey && event.key == 'S') {
  let iconClick = document.querySelector('.search-btn');
  iconClick.dispatchEvent(new Event('click'));
  document.querySelector('.search-input').value = '';
 }

 // When press Shift + S Key
 // SideBar will shrink
 if (event.shiftKey && event.key == 'M') {
  let menuIconClickEvent = new Event('click');
  let iconClick = document.querySelector('.menu-btn');
  iconClick.dispatchEvent(menuIconClickEvent);
 }
});
