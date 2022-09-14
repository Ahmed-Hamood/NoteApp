import startup_SideBarRender from './sideBar_Render/main.js';
import Startup_PageLoader from './pageLoader.js';
import startup_contentRender from './content_render/main.js';

document.addEventListener('DOMContentLoaded', () => {
 StartUp();
});

function StartUp() {
 startup_SideBarRender();
 startup_contentRender();
 Startup_PageLoader();

}
