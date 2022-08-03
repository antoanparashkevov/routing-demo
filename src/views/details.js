import {html} from "../../node_modules/lit-html/lit-html.js";
import {getCarById} from "../data/cars.js";

const detailsTemplate = (car) => html`
    <h1>Details</h1>
    ${car ? html`
        <h2>${car.make}</h2>
        <p>${car.model}</p>

    ` : html`Loading...`}
`;

export async function showDetails(ctx) {
    const carId = ctx.params.id;
    console.log(ctx.params.id);
    ctx.render(detailsTemplate());

    const car = await getCarById(carId);
    ctx.render(detailsTemplate(car));
}
