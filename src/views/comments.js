import {html} from "../../node_modules/lit-html/lit-html.js";
import {repeat} from "../../node_modules/lit-html/directives/repeat.js";
import {createSubmitHandler} from "../data/util.js";


const commentsTemplate = (comments, commentForm) =>
    html
        `${commentForm}
        <div id="comments">
            <ul class="comment-list">
                ${repeat(comments, c => c._id, commentCard)}
            </ul>
        </div>`

const commentCard = (comment) =>
    html`
        <li>${comment.content}</li>`

const commentForm = (onSubmit) =>
    html
        `
            <form @submit=${onSubmit}>
                <textarea name="comment" value="Post a comment"></textarea>
                <input type='submit'>
            </form>`

export function commentsView(ctx) {
    return commentsWrapper(ctx)
}

function commentsWrapper(ctx) {
    return commentsTemplate([], commentForm(createSubmitHandler(onSubmit)))

    async function onSubmit(data) {
        console.log(data)
    }
}
