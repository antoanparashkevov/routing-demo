import { html } from "../node_modules/lit-html/lit-html.js";

const aboutTemplate = () => html`<h2>About page</h2>`;



export function showAbout(render){
    render(aboutTemplate())
}