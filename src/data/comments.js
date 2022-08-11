import * as api from './api.js'


const endpoints = {
    byCarId: (carId) =>`/data/comments?where=` + encodeURIComponent(`carId="${carId}"`),
    create: '/data/comments'
}

export async function getCommentsById(carId){
    return api.get(endpoints.byCarId(carId))
}
export async function createComment(carId,content){
    const comment = {
        carId,
        content
    }

    return api.post(endpoints.create,comment)
}
