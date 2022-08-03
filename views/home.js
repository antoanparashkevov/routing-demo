import { html, render } from "../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html` <h2>Home page</h2> `;

const main = document.querySelector("main");

export function showHome() {
  render(homeTemplate(), main);
}
