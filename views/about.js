import { html, render } from "../node_modules/lit-html/lit-html.js";

const aboutTemplate = () => html`<h2>About page</h2>`;

const main = document.querySelector("main");


export function showAbout(){
    render(aboutTemplate(),main)
}