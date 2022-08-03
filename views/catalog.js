import { html } from "../node_modules/lit-html/lit-html.js";

const catalogTemplate = () => html`<h2>Catalog page</h2>`;



export function showCatalog(render){
    render(catalogTemplate())
}