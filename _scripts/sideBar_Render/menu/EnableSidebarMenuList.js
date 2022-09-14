import { setFileWithLinkContentPageRender } from './setMenuSubjectFilesLink.js';

let allMainTopFolders;
let allSubjectSubFolders;
let allSubjectFiles;

let folderWithFileContent = null;
let subFolders = null;

export default function EnableSidebarMenuList() {
 allSubjectSubFolders = document.querySelectorAll('.folder-type');
 allSubjectFiles = document.querySelectorAll('.file-type');
 allMainTopFolders = document.querySelectorAll('.main-folder');

 allMainTopFolders.forEach((folders) => {
  folders.addEventListener('click', (ev) => {
   if (ev.target.classList.contains('main-folder')) {
    ArrowChange(ev.target);
    FolderIconChange(ev.target);
    ToggleAndEnableMenu(ev.target);
    AddEventListenersToSubFolders(ev.target);
    AddEventListenerToFilesOnOpenedFolder(ev.target);
   } else {
    ArrowChange(ev.target.parentElement);
    FolderIconChange(ev.target.parentElement);
    ToggleAndEnableMenu(ev.target.parentElement);
    AddEventListenersToSubFolders(ev.target.parentElement);
    AddEventListenerToFilesOnOpenedFolder(ev.target.parentElement);
   }
  });
 });
}

export function AddEventListenerToFilesOnOpenedFolder(targetElement) {
 if (targetElement.nextElementSibling) {
  folderWithFileContent = targetElement.nextElementSibling.children;

  if (targetElement.getAttribute('events') != 'true') {
   targetElement.setAttribute('events', 'true');

   for (let index = 0; index < folderWithFileContent.length; index++) {
    if (folderWithFileContent[index].classList.contains('file-type')) {
    //  console.log('Add Listeners');
    //  console.log(folderWithFileContent[index]);
     folderWithFileContent[index].addEventListener('click', AddEventListenerToFile);
    }
   }
  } else {
   targetElement.setAttribute('events', 'false');
   for (let index = 0; index < folderWithFileContent.length; index++) {
    if (folderWithFileContent[index].classList.contains('file-type')) {
    //  console.log('Remove Listeners');
    //  console.log(folderWithFileContent[index]);
     folderWithFileContent[index].removeEventListener('click', AddEventListenerToFile);
    }
   }
  }
 }
}

export function AddEventListenersToSubFolders(targetElement) {
 if (targetElement.nextElementSibling) {
  subFolders = targetElement.nextElementSibling.children;

  for (let index = 0; index < subFolders.length; index++) {
   if (subFolders[index].classList.contains('folder-type')) {
    if (targetElement.classList.contains('menu-enable')) {
    //  console.log(targetElement.nextElementSibling);
    //  console.log('Add');
     subFolders[index].addEventListener('click', AddEventListenerToSubFolder);
    } else {
    //  console.log(targetElement.nextElementSibling);
    //  console.log('remove');
     subFolders[index].removeEventListener('click', AddEventListenerToSubFolder);
    }
   }
  }
 }
}

function AddEventListenerToFile(e) {
 e.preventDefault();
 // remove highlight class name from all subject title links
 // highlight the selected topic title link
 allSubjectFiles.forEach((el) => el.classList.remove('highlight-menu'));

 if (e.target.classList.contains('file-type')) {
  e.target.classList.toggle('highlight-menu');
  setFileWithLinkContentPageRender(e.target);
 } else {
  e.target.parentElement.classList.toggle('highlight-menu');
  setFileWithLinkContentPageRender(e.target.parentElement);
 }
}

function AddEventListenerToSubFolder(e) {
 if (e.target.classList.contains('folder-type')) {
  ToggleAndEnableMenu(e.target);
  ArrowChange(e.target);
  FolderIconChange(e.target);
  AddEventListenersToSubFolders(e.target);
  AddEventListenerToFilesOnOpenedFolder(e.target);
 } else {
  ToggleAndEnableMenu(e.target.parentElement);
  ArrowChange(e.target.parentElement);
  FolderIconChange(e.target.parentElement);
  AddEventListenersToSubFolders(e.target.parentElement);
  AddEventListenerToFilesOnOpenedFolder(e.target.parentElement);
 }
}

// ..............................................................
// ..............................................................
// ..............................................................

function FolderIconChange(element) {
 if (element.children[1].classList.contains('folder-icon')) {
  if (element.classList.contains('menu-enable')) {
   element.children[1].src = '/_images/icons/folder-open-icon.png';
  } else {
   element.children[1].src = '/_images/icons/folder-close-icon.png';
  }
 }
}

function ArrowChange(element) {
 element.children[0].classList.toggle('arrow-open');
}

function ToggleAndEnableMenu(element) {
 element.classList.toggle('menu-enable');
 if (element.nextElementSibling) {
  if (element.nextElementSibling.classList.contains('subject-list-menu')) {
   element.nextElementSibling.classList.toggle('menu-open');
  }
 }
}
