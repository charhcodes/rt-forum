import LoginPage from "./login.js";
import HomePage from "./home.js";
import RegisterPage from "./registration.js";

const navigateTo = (page) => {
  history.pushState(null, null, page); // update browser url
  pageLoader();
};

const pageLoader = async () => {
  const pages = [
    { path: "/", view: HomePage },
    { path: "/login", view: LoginPage },
    { path: "/register", view: RegisterPage },
  ];

  let page = pages.find((page) => location.pathname === page.path);
  if (page === undefined) page = pages[0];

  const view = new page.view();
  const html = view.renderHTML();

  document.querySelector("#container").innerHTML = html;
};

window.addEventListener("popstate", pageLoader);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      navigateTo(e.target.href);
    });
  });

  // document.body.addEventListener("click", (event) => {
  //   if (event.target.matches("[data-link]")) {
  //     event.preventDefault();
  //   }
  // });
  pageLoader();
});
