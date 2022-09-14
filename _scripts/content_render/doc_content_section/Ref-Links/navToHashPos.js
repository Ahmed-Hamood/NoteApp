export default function navToHashPos(refPos = null) {
 let urlSearchParams = new URLSearchParams(window.location.search);
 if (urlSearchParams.has('refPos') || refPos) {
  let getRef = refPos || urlSearchParams.get('refPos');
  let GetLinkPos = document.querySelector(`a[href='#${getRef}']`);

  let currentURL = location.href;
  if (GetLinkPos) {
   setTimeout(() => {
    GetLinkPos.click();
    window.history.pushState('page', null, currentURL);
   }, 2000);
  }
 }
}
