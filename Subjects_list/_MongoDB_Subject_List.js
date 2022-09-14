export const MongoDB_Subject_Menu = {
 main_subject_name: 'MongoDB',
 subject_img_icon: '/_images/subject_icons/MongoDB.png',
 type: 'custom-folder',
 subject_Path: '/MongoDB',
 subject_list_menu: [
  {
   sub_subject_name: 'Mongoose',
   subject_img_icon: '/_images/icons/folder-close-icon.png',
   type: 'folder',
   subject_Path: '/Mongoose',
   subject_list_menu: [
    {
     sub_subject_name: 'Getting Started',
     subject_img_icon: 'red-file-svg',
     type: 'file',
     hasFolder: false,
     subject_Path: '/Getting_Started.html',
     subject_list_menu: [],
    },
   ],
  },
  {
   sub_subject_name: 'Documentation',
   subject_img_icon: 'red-file-svg',
   type: 'file',
   hasFolder: true,
   subject_Path: '/Documentation.html',
   hasFolder: true,
   subject_list_menu: [],
  },
 ],
};
