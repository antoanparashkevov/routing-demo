import page from "../node_modules/page/page.mjs";
import {render as litRender} from "../node_modules/lit-html/lit-html.js";

import {showAbout} from "./views/about.js";
import {showHome} from "./views/home.js";
import {showCatalog} from "./views/catalog.js";
import {showDetails} from "./views/details.js";
import {showLogin} from './views/login.js'

import * as api from './data/cars.js';
import {parseQueryString} from "./data/util.js";
//to get access through browser developer tool
window.api = api;

const main = document.querySelector("main");

//as global middleware to all routes
page(decorateContext)
//as a second global middleware to all routes
page(parseQueryString)
page("/", "/home");
page("/home", showHome);
page("/catalog", showCatalog);
// using dynamic params
page("/catalog/:id", showDetails);
page("/about", showAbout);
page("/login", showLogin);
page("/test", t1, t2);

page.start();


function render(templateResult) {
  litRender(templateResult, main);
}


function decorateContext(ctx, next) {
  ctx.render = render;
  next();
}



//just for test
function t1(ctx, next) {
  ctx.myValue = 5;
  next(); //invoking next function
}

function t2(ctx) {
  console.log(ctx);
}
