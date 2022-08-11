import {html} from "../../node_modules/lit-html/lit-html.js";
import {cache} from "../../node_modules/lit-html/directives/cache.js";
import {getCarById} from "../data/cars.js";
import {commentsView} from "./comments.js";

const detailsTemplate = (car,commentsSection) => html`
    <h1>Details</h1>
    ${car ? html`
        <h2>${car.make}</h2>
        <p>${car.model}</p>

    ` : html`Loading...`}
    ${commentsSection}
`;

let carCache = null;


export async function showDetails(ctx) {
    const carId = ctx.params.id;
    // console.log(ctx.params.id);
    ctx.render(detailsTemplate());
        if(carCache === null){
            carCache = await getCarById(carId);
        }
    const car = carCache
    ctx.render(cache(detailsTemplate(car,commentsView(ctx))));
}
