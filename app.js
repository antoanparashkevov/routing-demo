import page from './node_modules/page/page.mjs'

const views = {
    '/': () => `<h2>Home page</h2>`,
    '/home': () => `<h2>Home page</h2>`,
    '/catalog': () => `<h2>Catalog page</h2>`,
    '/about': () => `<h2>About page</h2>`
}
const main = document.querySelector('main')

page('/home',() => main.innerHTML = `<h2>Home page</h2>`);

page.start();
