import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import {until} from '../../node_modules/lit-html/directives/until.js'
import {repeat} from "../../node_modules/lit-html/directives/repeat.js";
import {getAllCars} from "../data/cars.js";
import {createSubmitHandler} from "../data/util.js";

const catalogTemplate = (cars, searcher, pager) => html`
    <h2>Catalog page</h2>
    ${searcher}
    ${pager}

    ${repeat(cars, (car) => car._id, carCard)}
`;

const carCard = (car) => html`
    <li><a href="/catalog/${car._id}">${car.make} ${car.model}</a></li>`;

const pagerTemplate = (page, pages) => html
    `
        <div>
            ${page > 1 ? html`<a href="?page=${page - 1}">&lt;Prev</a>` : nothing}

            <span>Page ${page}</span>

            ${page < pages ? html`<a href="?page=${page + 1}">Next &gt;</a>` : nothing}

        </div>`


const searchTemplate = (search, onSubmit) => html
    `
        <form @submit="${onSubmit}">
            <label for="search">Search: <input type="text" name="search" .value="${search}"></label>
            <input type='submit' value="Search">

        </form>`

export async function showCatalog(ctx) {
    // displaying query string into browser console.
    // console.log(ctx.querystring)
    // console.log(ctx.query)
    ctx.render(until(catalogWrapper(ctx), 'Loading...'))


}

async function catalogWrapper(ctx) {
    const search = Number(ctx.query.search) || ''
    //if we don't have any page, this will return undefined, but undefined is falsy value and will display 1
    const page = Number(ctx.query.page) || 1

    //render empty string while we wait for response
    ctx.render(catalogTemplate([], page));

    const {data, pages} = await getAllCars(page);
    return catalogTemplate(data, searchTemplate(search, createSubmitHandler(onSubmit)), pagerTemplate(page, pages));

    function onSubmit(data) {
        ctx.page.redirect('/catalog?search=' + data.search)
    }
}
