export function createHistoryRouter(main,views){
    // window.addEventListener('popstate',onChange)
    return onChange;

    function onChange(){
        const pathname = window.location.pathname

        const view = views[pathname];
        if(typeof view === 'function'){
            main.innerHTML = view()
        }
    }
}
