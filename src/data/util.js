export function parseQueryString(ctx,next){
    ctx.query = {}
    if(ctx.querystring){
        ctx.query = Object.fromEntries(ctx.querystring.split('&').map(p => p.split('=')))
        //or
        // const query = Object.fromEntries(ctx.querystring.split('&').map(p => p.split('=')))
        // Object.assign(ctx.query, query)
    }

    next()
}


//decorator function
export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        // console.log(formData)
        // console.log(formData.entries())
        // console.log(Object.fromEntries(formData.entries()))
        const asObject = Object.fromEntries(formData.entries())
        callback(asObject)

    }
}
