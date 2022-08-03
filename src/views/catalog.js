import { html } from "../../node_modules/lit-html/lit-html.js";

const catalogTemplate = () => html
`
<h2>Catalog page</h2>
<li><a href="/catalog/p1">Product 1</a></li>
<li><a href="/catalog/p2">Product 2</a></li>
<li><a href="/catalog/p3">Product 3</a></li>
`;



export function showCatalog(ctx){
    ctx.render(catalogTemplate())
}