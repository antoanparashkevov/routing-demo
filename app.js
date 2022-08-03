import page from './node_modules/page/page.mjs'
import { showAbout } from './views/about.js';
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';


page('/','/home');
page('/home',showHome);
page('/catalog',showCatalog);
page('/about',showAbout);

page.start();
