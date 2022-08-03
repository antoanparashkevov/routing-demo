import {createHashRouter} from "./hashRouter.js";

const main = document.querySelector('main')

const views = {
    '#home': () => `<h2>Home page</h2>`,
    '#catalog': () => `<h2>Catalog page</h2>`,
    '#about': () => `<h2>About page</h2>`
}

const start = createHashRouter(main, views)
//Start Application

start()


