import { html } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (id) => html
`
<h1>Details</h1>
<p>Details for ${id}</p>
`

export function showDetails(ctx) {
    const productId = ctx.params.id
    console.log(ctx.params.id);
    ctx.render(detailsTemplate(productId));
  }