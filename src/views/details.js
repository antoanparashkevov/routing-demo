import { html } from "../../node_modules/lit-html/lit-html.js";
import { getRecipeById } from "../data/recipes.js";

const detailsTemplate = (recipe) => html`
  <h1>Details</h1>
  ${recipe ? html`
  <h2>${recipe.name}</h2>
 ${recipe.ingredients.map(i=>html`<p>${i}</p>`)}
 ${recipe.steps.map(s=>html`<p>${s}</p>`)}

  ` : html`Loading...`}
`;

export async function showDetails(ctx) {
  const productId = ctx.params.id;
  console.log(ctx.params.id);
  ctx.render(detailsTemplate());

  const recipe = await getRecipeById(productId);
  ctx.render(detailsTemplate(recipe));
}
