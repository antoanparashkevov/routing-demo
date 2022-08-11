import {html} from "../../node_modules/lit-html/lit-html.js";
import {repeat} from "../../node_modules/lit-html/directives/repeat.js";
import {until} from "../../node_modules/lit-html/directives/until.js";
import {createSubmitHandler} from "../data/util.js";
import {createComment, getCommentsById} from "../data/comments.js";


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
                <input type='submit' value="Submit">
            </form>`

export function commentsView(ctx) {
    return until(commentsWrapper(ctx),'Loading comments')
}

async function  commentsWrapper(ctx) {
    const carId = ctx.params.id
    const comments = await getCommentsById(carId)
    return commentsTemplate(comments, commentForm(createSubmitHandler(onSubmit)))

    async function onSubmit(data,form) {
      await createComment(carId,data.content)
        form.reset()
        ctx.page.redirect('/details/' + carId)


    }
}
