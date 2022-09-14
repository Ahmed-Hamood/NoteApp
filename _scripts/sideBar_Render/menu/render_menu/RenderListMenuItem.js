export default function RenderListMenuItem(data) {
 let topIconType = null;
 let topicType = null;
 let idName = null;
 let Type = null;
 let iconElement = null;
 let concatPaths = null;
 let withFolder = null;

 const createMainSubjectTitleLink = (subject_name, url, icon, type) => {
  topIconType = type == 'folder' ? 'folder-icon' : 'custom-icon';

  return `
     <a class="subject-title-link folder-type main-folder" urlPath="/Docs${url}" id="menu-list">
       <i class="arrow svg menu-arrow-svg"></i>
       <img class="subject-icon ${topIconType}" src="${icon}" alt="image">
       <span class="subject-name"> ${subject_name} </span>
     </a>
  `;
 };

 const createSubSubjectTitleLink = (
  type,
  name,
  icon,
  subject_Path,
  main_subject_Path,
  hasFolder,
  Lvl1 = { subject_Path: '' },
  Lvl2 = { subject_Path: '' },
  Lvl3 = { subject_Path: '' },
  Lvl4 = { subject_Path: '' },
  Lvl5 = { subject_Path: '' }
 ) => {
  topicType = type == 'folder' || type == 'custom-folder' ? 'arrow svg menu-arrow-svg' : 'hierarchy-line';
  idName = type === 'folder' ? 'menu-list' : '';
  Type = type === 'file' ? 'file-type' : 'folder-type';
  concatPaths = main_subject_Path + Lvl1['subject_Path'] + Lvl2['subject_Path'] + Lvl3['subject_Path'] + Lvl4['subject_Path'] + Lvl5['subject_Path'] + subject_Path;
  withFolder = hasFolder ? "true" : "false"

  if (type == 'folder') iconElement = `<img class="subject-icon folder-icon" src="${icon}" alt="image">`;
  else if (type == 'custom-folder') iconElement = `<img class="subject-icon custom-icon" src="${icon}" alt="image">`;
  else iconElement = `<i class="subject-icon svg ${icon} file-icon" alt="image"></i>`;


  return `
    <a class="subject-title-link sub-menu-title ${Type}" urlPath="/Docs${concatPaths}" id="${idName}" hasFolder="${withFolder}">
      <span class="${topicType}"></span>
      ${iconElement}
      <span class="subject-name">${name}</span>
    </a>
    `;
 };

 return `
   <article class="subject-content">
   ${createMainSubjectTitleLink(data.main_subject_name, data.subject_Path, data.subject_img_icon, data.type)}
   <section class="subject-list-menu one-level-menu">
   ${data.subject_list_menu
    .map((elementLvl1) => {
     if (elementLvl1['subject_list_menu'].length == 0) {
      return createSubSubjectTitleLink(
       elementLvl1['type'],
       elementLvl1['sub_subject_name'],
       elementLvl1['subject_img_icon'],
       elementLvl1['subject_Path'],
       data.subject_Path,
       elementLvl1["hasFolder"]
      );
     } else {
      return `
       ${createSubSubjectTitleLink(
        elementLvl1['type'],
        elementLvl1['sub_subject_name'],
        elementLvl1['subject_img_icon'],
        elementLvl1['subject_Path'],
        data.subject_Path,
        elementLvl1["hasFolder"]
       )}
       <section class="subject-list-menu two-level-menu">
         ${elementLvl1['subject_list_menu']
          .map((elementLvl2) => {
           if (elementLvl2['subject_list_menu'].length == 0) {
            return createSubSubjectTitleLink(
             elementLvl2['type'],
             elementLvl2['sub_subject_name'],
             elementLvl2['subject_img_icon'],
             elementLvl2['subject_Path'],
             data.subject_Path,
             elementLvl2["hasFolder"],
             elementLvl1
            );
           } else {
            return `
             ${createSubSubjectTitleLink(
              elementLvl2['type'],
              elementLvl2['sub_subject_name'],
              elementLvl2['subject_img_icon'],
              elementLvl2['subject_Path'],
              data.subject_Path,
              elementLvl2["hasFolder"],
              elementLvl1
             )}
             <section class="subject-list-menu three-level-menu">
               ${elementLvl2['subject_list_menu']
                .map((elementLvl3) => {
                 if (elementLvl3['subject_list_menu'].length == 0) {
                  return createSubSubjectTitleLink(
                   elementLvl3['type'],
                   elementLvl3['sub_subject_name'],
                   elementLvl3['subject_img_icon'],
                   elementLvl3['subject_Path'],
                   data.subject_Path,
                   elementLvl3["hasFolder"],
                   elementLvl1,
                   elementLvl2
                  );
                 } else {
                  return `
                    ${createSubSubjectTitleLink(
                     elementLvl3['type'],
                     elementLvl3['sub_subject_name'],
                     elementLvl3['subject_img_icon'],
                     elementLvl3['subject_Path'],
                     data.subject_Path,
                     elementLvl3["hasFolder"],
                     elementLvl1,
                     elementLvl2
                    )}
                    <section class="subject-list-menu four-level-menu">
                      ${elementLvl3['subject_list_menu']
                       .map((elementLvl4) => {
                        if (elementLvl4['subject_list_menu'].length == 0) {
                         return createSubSubjectTitleLink(
                          elementLvl4['type'],
                          elementLvl4['sub_subject_name'],
                          elementLvl4['subject_img_icon'],
                          elementLvl4['subject_Path'],
                          data.subject_Path,
                          elementLvl4["hasFolder"],
                          elementLvl1,
                          elementLvl2,
                          elementLvl3
                         );
                        } else {
                         return `
                           ${createSubSubjectTitleLink(
                            elementLvl4['type'],
                            elementLvl4['sub_subject_name'],
                            elementLvl4['subject_img_icon'],
                            elementLvl4['subject_Path'],
                            data.subject_Path,
                            elementLvl4["hasFolder"],
                            elementLvl1,
                            elementLvl2,
                            elementLvl3
                           )}
                           <section class="subject-list-menu five-level-menu">                   
                           ${elementLvl4['subject_list_menu']
                            .map((elementLvl5) => {
                             if (elementLvl5['subject_list_menu'].length == 0) {
                              return createSubSubjectTitleLink(
                               elementLvl5['type'],
                               elementLvl5['sub_subject_name'],
                               elementLvl5['subject_img_icon'],
                               elementLvl5['subject_Path'],
                               data.subject_Path,
                               elementLvl5["hasFolder"],
                               elementLvl1,
                               elementLvl2,
                               elementLvl3,
                               elementLvl4
                              );
                             } else {
                              return `
                               ${createSubSubjectTitleLink(
                                elementLvl5['type'],
                                elementLvl5['sub_subject_name'],
                                elementLvl5['subject_img_icon'],
                                elementLvl5['subject_Path'],
                                data.subject_Path,
                                elementLvl5["hasFolder"],
                                elementLvl1,
                                elementLvl2,
                                elementLvl3,
                                elementLvl4
                               )}
                                <section class="subject-list-menu six-level-menu"> 
                                ${elementLvl5['subject_list_menu']
                                 .map((elementLvl6) => {
                                  return createSubSubjectTitleLink(
                                   elementLvl6['type'],
                                   elementLvl6['sub_subject_name'],
                                   elementLvl6['subject_img_icon'],
                                   elementLvl6['subject_Path'],
                                   data.subject_Path,
                                   elementLvl6["hasFolder"],
                                   elementLvl1,
                                   elementLvl2,
                                   elementLvl3,
                                   elementLvl4,
                                   elementLvl5
                                  );
                                 })
                                 .join('')}
                                </section>
                               `;
                             }
                             // remaining level here
                            })
                            .join('')}
                           </section>
                           `;
                        }
                       })
                       .join('')}
                    </section>
                    `;
                 }
                })
                .join('')}
             </section>
             `;
           }
          })
          .join('')}
       </section>
       `;
     }
    })
    .join('')}
   `;
}
