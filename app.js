import page from './node_modules/page/page.mjs'

const main = document.querySelector('main')

page('/','/home');
page('/home',() => main.innerHTML = `<h2>Home page</h2>`);
page('/catalog',() => main.innerHTML = `<h2>Catalog page</h2>`);
page('/about',() => main.innerHTML =`<h2>About page</h2>`);

page.start();
