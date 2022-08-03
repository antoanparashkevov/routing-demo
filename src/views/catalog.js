import { html } from "../../node_modules/lit-html/lit-html.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import { getAllRecipes } from "../data/recipes.js";

const catalogTemplate = (recipes) => html`
  <h2>Catalog page</h2>
  ${repeat(recipes, (recipe) => recipe._id, recipeCard)}
`;

const recipeCard = (recipe) => html`<li>${recipe.name}</li>`;

export async function showCatalog(ctx) {
  const recipes = await getAllRecipes();
  ctx.render(catalogTemplate(recipes));
}
