export default async function appendRefLinks() {
 const getAllLinks = document.querySelectorAll('#ref-link');
 const getAllOnlyLinks = document.querySelectorAll('#only-link');
 const hasFolder = document.querySelector('.highlight-menu');

 if (getAllOnlyLinks.length != 0) {
  getAllOnlyLinks.forEach((element) => {
   element.target = '_blank';
  });
 }

 if (getAllLinks.length != 0) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  let getPathUrl = location.hash;
  let getDataRef;
  let ref_name;
  let ref_href;
  let ref_type;
  let ref_info;
  let refHashPos;
  let refQs;
  let ref_description;

  getPathUrl = getPathUrl.split('#');
  // ['', 'Docs', 'nodejs', 'expressjs', 'Authentication', 'Helmet', '3%20-%20topic%20three.html'] // new tab topic link
  // ['', 'Docs', 'nodejs', 'expressjs', 'Authentication', 'Helmet.html'] // topic link

  if (urlSearchParams.has('newTab') && urlSearchParams.has('topicLink')) getPathUrl.pop();
  else getPathUrl[getPathUrl.length - 1] = getPathUrl[getPathUrl.length - 1].slice(0, -5);

  // console.log(getPathUrl);
  // console.log(hasFolder);

  if (hasFolder) {
   if (hasFolder.getAttribute('hasFolder') == 'false') {
    getPathUrl.pop();
   }
  }

  if (urlSearchParams.has('hasFolder')) {
   if (urlSearchParams.get('hasFolder') == 'false') {
    getPathUrl.pop();
   }
  }

  getPathUrl = getPathUrl.join('/');

  try {
   getDataRef = await LoadRef(getPathUrl);
  } catch (error) {
   console.log('Error While fetching reference Link');
  }

  getAllLinks.forEach((element) => {
   let get_href = element.getAttribute('href');
   if (getDataRef) {
    getDataRef.forEach((data) => {
     if (get_href == data.ref_id) {
      ref_name = data.ref_name;
      ref_href = data.ref_href;
      ref_type = data.ref_type;
      ref_info = data.ref_info;
      refHashPos = data.hashPos.substring(1);
      refQs = data.qs;
      ref_description = data.ref_description;
     }
    });
   }

   refHashPos = refHashPos ? `refPos=${refHashPos}` : '';

   if (ref_type == 'link' || ref_type == 'link_desc') {
    element.href = location.origin + `/?${refHashPos}&${refQs}` + ref_href;
   } else {
    //  element.href = '';
    element.removeAttribute('href');
   }

   element.target = '_blank';
   element.textContent = ref_name;

   if (ref_type == 'desc') {
    element.innerHTML += `<p class='tooltiptext'>${ref_description}</p>`;
   } else if (ref_type == 'link') {
    element.innerHTML += `<p class='tooltiptext'><span class="sub-text">Click anywhere for more information</span></p>`;
   } else if (ref_type == 'link_desc') {
    element.innerHTML += `<p class='tooltiptext'>${ref_description} <br/> <span class="sub-text">Click anywhere for more information</span></p>`;
   }
  });
 }
}

async function LoadRef(url_link) {
 let getData = await fetch(url_link + '/ref.json');
 getData = await getData.json();
 return getData;
}
