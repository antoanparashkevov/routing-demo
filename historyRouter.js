export function createHistoryRouter(main, views) {
  window.addEventListener("popstate", onChange);
  document.body.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      window.history.pushState(null,'',event.target.href)
      onChange();
    }
  });
  return onChange;

  function onChange() {
    const pathname = window.location.pathname;
    // console.log(pathname);

    const view = views[pathname];

    if (typeof view === "function") {
      main.innerHTML = view();
    }
  }
}
