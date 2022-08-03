import page from "./node_modules/page/page.mjs";

import { render as litRender } from "./node_modules/lit-html/lit-html.js";
import { showAbout } from "./views/about.js";
import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";

const main = document.querySelector("main");

page("/", "/home");
page("/home", (ctx) =>{
    ctx.render = render;
    showHome(ctx)});
page("/catalog", (ctx) => {
    ctx.render = render;
    showCatalog(ctx)
});
// using dynamic params
page("/catalog/:id", showDetails);
page("/about", (ctx) => {
    ctx.render = render;
    showAbout(ctx)
});

page.start();

function render(templateResult) {
  litRender(templateResult, main);
}
function showDetails(ctx){
    console.log(ctx.params.id)
}