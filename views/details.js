import { html } from "../node_modules/lit-html/lit-html.js";

const detailsTemplate = () => html
`
<h1>Details</h1>
<p>Details for product</p>
`

export function showDetails(ctx) {
    console.log(ctx.params.id);
    ctx.render(detailsTemplate())
  }