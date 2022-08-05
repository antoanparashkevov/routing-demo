import { html } from "../../node_modules/lit-html/lit-html.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import { getAllCars } from "../data/cars.js";

const catalogTemplate = (cars) => html`
  <h2>Catalog page</h2>
  ${repeat(cars, (car) => car._id, carCard)}
`;

const carCard = (car) => html`<li><a href="/catalog/${car._id}">${car.make} ${car.model}</a></li>`;

export async function showCatalog(ctx) {
  //displaying query string into browser console.
  // console.log(ctx.querystring)
  console.log(ctx.query)
  const cars = await getAllCars();
  ctx.render(catalogTemplate(cars));
}
