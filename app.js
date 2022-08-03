import page from './node_modules/page/page.mjs'
import { showHome } from './views/home.js';

const main = document.querySelector('main')

page('/','/home');

page('/home',showHome);
page('/catalog',() => main.innerHTML = `<h2>Catalog page</h2>`);
page('/about',() => main.innerHTML =`<h2>About page</h2>`);

page.start();
