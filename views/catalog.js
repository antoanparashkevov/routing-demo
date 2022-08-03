import { html, render } from "../node_modules/lit-html/lit-html.js";

const catalogTemplate = () => html`<h2>Catalog page</h2>`;

const main = document.querySelector("main");


export function showCatalog(){
    render(catalogTemplate(),main)
}