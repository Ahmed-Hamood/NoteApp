import { currentActivePath, RenderPageContent } from '../../pageLoader.js';
import Sounds from '../../sounds.js';

// Active render content on every url link change
export default function setMenuSubjectFilesLink() {
 const allSubjectFiles = document.querySelectorAll('.file-type');

 allSubjectFiles.forEach((el) => {
  let targetLinkElement = el;

  if (!el.classList.contains('file-type')) targetLinkElement = el.parentElement;

  let getPathUrl = targetLinkElement.getAttribute('urlPath');
  let getHasFolder = targetLinkElement.getAttribute('hasFolder');

  let UrlTab = ConvertPathFromSlashToHashes(location.origin + getPathUrl);
  let finalUrlWithParam = location.origin + `?newTab&hasFolder=${getHasFolder}&subjectTitle=${targetLinkElement.children[2].textContent}__` + UrlTab;
  targetLinkElement.setAttribute('href', finalUrlWithParam);
 });
}

export function setFileWithLinkContentPageRender(targetElement) {
 let navTitleHeader = document.querySelector('.nav-title-header');
 let SelectedUrlPath = null;

 navTitleHeader.innerHTML = targetElement.children[2].textContent;
 SelectedUrlPath = targetElement.getAttribute('urlPath');

 if (SelectedUrlPath != currentActivePath) {
   RenderPageContent(location.origin + SelectedUrlPath, false, true);
   Sounds().Play_press();
  // currentActivePath = SelectedUrlPath;
 }
}

function ConvertPathFromSlashToHashes(LocationUrlLink) {
 return GetLocationPathPart(LocationUrlLink).replaceAll(/\//g, '#');
}

function GetLocationPathPart(fullUrlLink) {
 const url = new URL(fullUrlLink);
 return url.pathname;
}
