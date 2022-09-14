import startup_contentRender from './content_render/main.js';
import { AddEventListenersToSubFolders, AddEventListenerToFilesOnOpenedFolder } from './sideBar_Render/menu/EnableSidebarMenuList.js';
import setMenuSubjectFilesLink from './sideBar_Render/menu/setMenuSubjectFilesLink.js';

// let getAllSubjectFileTypeLinkElements = null;

let DocContentRender = document.getElementById('doc-content-render');
let navTitleHeader = document.querySelector('.nav-title-header');
let pathViewContentHeader = document.querySelector('.path-view-content-header');
let BackBtn = document.getElementById('go-back');
let ForwardBtn = document.getElementById('go-forward');
let HomeBtn = document.querySelector('.home-btn');
let sideBar = document.querySelector('.sideBar');
let menuIconContainer = document.querySelector('.menuIcon-mobile-container');
let MenuListenerHasRun = false;
let root = document.querySelector(':root');

let urlSearchParams = new URLSearchParams(window.location.search);
export let currentActivePath = '';
let UrlPathsHistory = ['/'];
let currentUrlPathsHistoryIndex = 0;
let _isTopicLinkSelected = false;

let DocContentInnerHTML = '';
let ErrorMsgHTMLContent = '<h1> Page Error . . . . </h1> <br /> <p> Retrieving Last Page, Please Wait . . .  </p>';
let LoadingHTML = `<div class="spinner-content">
<div class="spinner-wheel"></div>
<p class="spinner-message"></p>
</div>`;
let storePreviousHTMLContentOnError = '';
let storeDocumentationContent = '';
let saveLastDocumentationPathLink = '';

export default function Startup_PageLoader() {
 Start_RenderPageContent();
 setupNavigationBackAndForwardHistoryButtons();

 if (!urlSearchParams.has('newTab')) {
  setMenuSubjectFilesLink();

 }
}

// ########################################################################################
// ########################################################################################
// ########################################################################################
// ########################################################################################

// when page load get url path and render the content
function Start_RenderPageContent() {
 const getUrl = ConvertPathFromHashToSlash(location) || '';

 if (getUrl != '') currentUrlPathsHistoryIndex++;

 if (urlSearchParams.has('newTab')) {
  sideBar.remove();
  menuIconContainer.style.display = 'none';
  currentUrlPathsHistoryIndex = 0;
  UrlPathsHistory.shift();  root.style.setProperty("--content-render-width", '111vw')
 }

 RenderPageContent(location.origin + getUrl);
}

// Setup Navigate back and forward Buttons
function setupNavigationBackAndForwardHistoryButtons() {
 BackBtn.addEventListener('click', () => {
  if (currentUrlPathsHistoryIndex != 0) {
   let extractHistoryPath,
    getUrl = '';

   extractHistoryPath = UrlPathsHistory[--currentUrlPathsHistoryIndex];

   getUrl = location.origin + ConvertPathFromHashToSlash(location.origin + extractHistoryPath);

   RenderPageContent(getUrl, true);
  }
 });

 ForwardBtn.addEventListener('click', (e) => {
  // disable forward button when history length is in last page, and disable it also when entering a topic link
  if (currentUrlPathsHistoryIndex < UrlPathsHistory.length - 1 && !_isTopicLinkSelected) {
   let extractHistoryPath = '';
   let getUrl = '';

   extractHistoryPath = UrlPathsHistory[++currentUrlPathsHistoryIndex];
   getUrl = location.origin + ConvertPathFromHashToSlash(location.origin + extractHistoryPath);

   console.log(getUrl);

   RenderPageContent(getUrl, true);
  }
 });

 window.onpopstate = function () {
  if (currentActivePath.includes('%20')) {
   let currentMenuPath = currentActivePath.split('/');
   currentMenuPath.pop();
   currentMenuPath = currentMenuPath.join('/').concat('.html');
   window.history.pushState('page', null, ConvertPathFromSlashToHashes(location.origin + currentMenuPath));
  } else {
   window.history.pushState('page', null, ConvertPathFromSlashToHashes(location.origin + currentActivePath));
  }
 };
}

// ########################################################################################
// ########################################################################################
// ########################################################################################
// ########################################################################################

function ConvertPathFromHashToSlash(LocationUrlLink) {
 return GetLocationHashPart(LocationUrlLink).replaceAll(/\#/g, '/');
}

function ConvertPathFromSlashToHashes(LocationUrlLink) {
 return GetLocationPathPart(LocationUrlLink).replaceAll(/\//g, '#');
}

function GetLocationPathPart(fullUrlLink) {
 const url = new URL(fullUrlLink);
 return url.pathname;
}

function GetLocationHashPart(fullUrlLink) {
 const url = new URL(fullUrlLink);
 return url.hash;
}

function InvokeClickEvent(className) {
 let menuIconClickEvent = new Event('click');
 let IconClick = document.querySelector(`.${className}`);
 IconClick.dispatchEvent(menuIconClickEvent);
}

// ########################################################################################
// ########################################################################################
// ########################################################################################
// ########################################################################################

function OpenFolderAndFileMenuAutomatically(urlPath) {
 const mergePaths = [];
 let UrlPathName = GetLocationPathPart(urlPath) == '/Docs' ? '/' : GetLocationPathPart(urlPath);

 let folders = UrlPathName.split('/'); //  ['', 'Docs', 'nodejs', 'expressjs', 'Authentication', 'Helmet.html']
 let File_highlighted = false;
 let getAllFiles = document.querySelectorAll('.file-type');

 // select file that ends with .html or clear all files highlight if path is home
 if (UrlPathName.slice(-4) === 'html' || UrlPathName == '/') {
  // highlight the path name file
  getAllFiles.forEach((el) => {
   if (el.getAttribute('urlPath') == UrlPathName && !File_highlighted) {
    el.classList.add('highlight-menu');
    navTitleHeader.innerHTML = el.children[2].textContent;
    File_highlighted = true;
   } else {
    el.classList.remove('highlight-menu');
   }
  });
 }

 folders.shift(); // remove first element ''
 folders.shift(); // remove first element 'Docs'
 folders.pop(); // remove last element 'Helmet.html' - folders = ['nodejs', 'expressjs', 'Authentication']

 mergePaths.push(`/Docs/${folders[0]}`);

 for (let index = 1; index < folders.length; index++) {
  mergePaths.push(mergePaths[index - 1] + '/' + folders[index]);
 }

 // mergePaths = ['/Docs/nodejs', '/Docs/nodejs/expressjs', '/Docs/nodejs/expressjs/Authentication']

 document.querySelectorAll('.folder-type').forEach((el) => {
  mergePaths.forEach((path) => {
   if (el.getAttribute('urlPath') == path) {
    el.classList.add('menu-enable');
    if (!MenuListenerHasRun) {
     AddEventListenerToFilesOnOpenedFolder(el);
     AddEventListenersToSubFolders(el);
    }
    el.children[0].classList.add('arrow-open');
    if (el.children[1].classList.contains('folder-icon')) {
     el.children[1].src = '/_images/icons/folder-open-icon.png';
    }
    if (el.nextElementSibling.classList.contains('subject-list-menu')) {
     el.nextElementSibling.classList.add('menu-open');
    }
   }
  });
 });
}

function RenderPathHeaderView(paths, isTopicLinkSelected) {
 let pathViewContent = '';
 let headerTitle = null;
 let ArrayOfPaths = paths.split('#'); // ['', 'Docs', 'nodejs', 'expressjs', 'Installation.html']
 let HtmlFile = ArrayOfPaths[ArrayOfPaths.length - 1] || ''; // get last file path

 ArrayOfPaths.shift(); // remove first path  // ['Docs', 'nodejs', 'expressjs', 'Installation.html']
 ArrayOfPaths.shift(); // remove first path  // ['nodejs', 'expressjs', 'Installation.html']

 if (HtmlFile.slice(-4) === 'html') {
  ArrayOfPaths[ArrayOfPaths.length - 1] = HtmlFile.replace(/\.html/g, '.doc');

  if (isTopicLinkSelected || urlSearchParams.has('topicLink')) headerTitle = decodeURIComponent(ArrayOfPaths[ArrayOfPaths.length - 1].slice(0, -4));
  if (!isTopicLinkSelected && urlSearchParams.has('subjectTitle')) headerTitle = urlSearchParams.get('subjectTitle').replace('__', '');

  navTitleHeader.innerHTML = headerTitle ? headerTitle : navTitleHeader.innerHTML;
 }

 if (ArrayOfPaths.length == 0) {
  ArrayOfPaths.push('Home Page');
  navTitleHeader.innerHTML = 'Main Page';
 }

 ArrayOfPaths.forEach((path, index) => {
  let addArrowPath = ArrayOfPaths.length - 1 != index ? '<span class="path-arrow"></span>' : '';

  pathViewContent += `
  <li> 
    <span class="path-view-title">${decodeURIComponent(path)}</span> 
    ${addArrowPath}
  </li>
  `;
 });

 pathViewContentHeader.innerHTML = `<marquee behavior="none" direction="left" scrollamount="0"><ul>${pathViewContent}</ul></marquee>`;

 if (pathViewContentHeader.children[0].children[0].offsetWidth + 10 > pathViewContentHeader.offsetWidth - 12)
  pathViewContentHeader.children[0].setAttribute('scrollamount', 10);
}

// ######################
// ######################
// ######################

export async function RenderPageContent(
 urlHrefLink,
 disablePathPush = false,
 isSubjectLinkSelected = false,
 isTopicLinkSelected = false,
 homeBtnClicked = false,
 refPos = null,
 hasFolder = null
) {
 let getHashedPath = ConvertPathFromSlashToHashes(urlHrefLink);

 if (!isSubjectLinkSelected && !isTopicLinkSelected && !urlSearchParams.has('newTab')) OpenFolderAndFileMenuAutomatically(urlHrefLink);

 if (homeBtnClicked) {
  currentUrlPathsHistoryIndex++;
  ForwardBtn.style['opacity'] = '0.1';
 }

 MenuListenerHasRun = true;

 if (urlHrefLink.slice(-4) === 'html' || urlHrefLink == location.origin) {
  // if (!isSubjectLinkSelected && !isTopicLinkSelected && !urlSearchParams.has('newTab')) OpenFolderAndFileMenuAutomatically(urlHrefLink);

  currentActivePath = GetLocationPathPart(urlHrefLink);

  if (urlHrefLink == location.origin) {
   getHashedPath = '/';
   currentActivePath = '';
   urlHrefLink = location.origin + '/Docs';
   // on home page disable home btn
   HomeBtn.style['opacity'] = '0.1';
   HomeBtn.style['cursor'] = 'default';
  } else {
   HomeBtn.style['opacity'] = '';
   HomeBtn.style['cursor'] = '';
  }

  if (getHashedPath.slice(-4) === 'html' && !disablePathPush) {
   if (UrlPathsHistory[UrlPathsHistory.length - 1] != getHashedPath) UrlPathsHistory.push(getHashedPath);
   currentUrlPathsHistoryIndex = UrlPathsHistory.length - 1;
  }

  // if current index path is 0 then set go-back button opacity to 0.2
  BackBtn.style['opacity'] = currentUrlPathsHistoryIndex == 0 ? '0.1' : '';
  // if current index path is equal to UrlPathsHistory length then set forward-back button opacity to 0.2
  if (!homeBtnClicked) ForwardBtn.style['opacity'] = currentUrlPathsHistoryIndex == UrlPathsHistory.length - 1 ? '0.1' : '';

  if (isTopicLinkSelected) {
   _isTopicLinkSelected = true;
   currentUrlPathsHistoryIndex++;
   BackBtn.style['opacity'] = '';
   ForwardBtn.style['opacity'] = '0.1';
  } else {
   window.history.pushState('page', null, getHashedPath);
   _isTopicLinkSelected = false;
  }

  RenderPathHeaderView(getHashedPath, isTopicLinkSelected);
  document.querySelector('.side-table-topic-content').innerHTML = '';

  console.log('Url Paths History: ', UrlPathsHistory);
  console.log('current history index: ', currentUrlPathsHistoryIndex);
  console.log('current Active Link: ', currentActivePath);

  // #############################################################
  // #############################################################
  // #############################################################

  storePreviousHTMLContentOnError = DocContentRender.innerHTML;
  DocContentRender.innerHTML = LoadingHTML;

  let getLastPositionPath = currentActivePath.split('/');
  getLastPositionPath = getLastPositionPath[getLastPositionPath.length - 1];

  if (window.innerWidth < 900 && !disablePathPush && !urlSearchParams.has('newTab')) InvokeClickEvent('menu-btn');

  if (getLastPositionPath.includes('Documentation')) {
   console.log(getLastPositionPath.includes('Documentation'));
   if (currentActivePath != saveLastDocumentationPathLink) {
    saveLastDocumentationPathLink = '';
    storeDocumentationContent = '';
   }

   saveLastDocumentationPathLink = currentActivePath;
  }

  try {
   if (!storeDocumentationContent || !getLastPositionPath.includes('Documentation')) {
    console.log('loading page');
    let responseData = await fetch(urlHrefLink);
    let contentText = await responseData.text();
    DocContentInnerHTML = contentText;

    if (getLastPositionPath.includes('Documentation')) {
     storeDocumentationContent = contentText;
    }

    if (responseData.statusText == 'Not Found') {
     DocContentInnerHTML = '<h1>No content - File Error</h1>';
     UrlPathsHistory.splice(UrlPathsHistory.length - 1, 1);
     currentUrlPathsHistoryIndex--;
    }
   } else {
    navTitleHeader.innerHTML += ' <span>(cached)</span>';
   }

   if (DocContentInnerHTML) {
    DocContentRender.setAttribute('id', '');
    void DocContentRender.offsetWidth;
    DocContentRender.setAttribute('id', 'doc-content-render');

    if (getLastPositionPath.includes('Documentation')) {
     DocContentRender.innerHTML = storeDocumentationContent;
    } else {
     DocContentRender.innerHTML = DocContentInnerHTML;
    }

    DocContentRender.innerHTML += '<br/> <br/>';
    storePreviousHTMLContentOnError = '';

    startup_contentRender(refPos, hasFolder);
   }
  } catch (error) {
   console.log('Error: ', error);

   setTimeout(() => {
    DocContentRender.innerHTML = ErrorMsgHTMLContent;
    setTimeout(() => {
     DocContentRender.innerHTML = storePreviousHTMLContentOnError;
    }, 6000);
   }, 3000);
  }
 }
}
