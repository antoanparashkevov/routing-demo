import { html } from "../../node_modules/lit-html/lit-html.js";
import { getRecipeById } from "../data/recipes.js";

const detailsTemplate = (id) => html`
  <h1>Details</h1>
  <p>Details for ${id}</p>
`;

export async function showDetails(ctx) {
  const productId = ctx.params.id;
  console.log(ctx.params.id);
  ctx.render(detailsTemplate(productId));

  const recipe = await getRecipeById(productId);
  ctx.render(detailsTemplate(recipe.name));
}
