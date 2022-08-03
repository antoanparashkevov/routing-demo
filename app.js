import page from "./node_modules/page/page.mjs";

import { render as litRender } from "./node_modules/lit-html/lit-html.js";
import { showAbout } from "./views/about.js";
import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";

const main = document.querySelector("main");

page("/", "/home");
page("/home", () => showHome(render));
page("/catalog", () => showCatalog(render));
// using dynamic params
page("/catalog/:id", showDetails);
page("/about", () => showAbout(render));

page.start();

function render(templateResult) {
  litRender(templateResult, main);
}
function showDetails(){
    console.log('showing details')
}