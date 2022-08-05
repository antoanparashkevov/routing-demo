import { html,nothing } from "../../node_modules/lit-html/lit-html.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import { getAllCars } from "../data/cars.js";

const catalogTemplate = (cars,page) => html`
  <h2>Catalog page</h2>
  
  <div>
    ${page > 1 ? html`<a href="?page=${page-1}">&lt;Prev</a>` : nothing}
    <span>Page ${page}</span>
    <a href="?page=${page+1}">Next &gt;</a>
  </div>
  
  
  ${repeat(cars, (car) => car._id, carCard)}
`;

const carCard = (car) => html`<li><a href="/catalog/${car._id}">${car.make} ${car.model}</a></li>`;

export async function showCatalog(ctx) {
  // displaying query string into browser console.
  // console.log(ctx.querystring)
  // console.log(ctx.query)

  //if we don't have any page, this will return undefined, but undefined is falsy value and will display 1
  const page = Number(ctx.query.page) || 1

  //render empty string while we wait for response
  ctx.render(catalogTemplate([],page));

  const cars = await getAllCars.data(page);
  ctx.render(catalogTemplate(cars,page));
}
