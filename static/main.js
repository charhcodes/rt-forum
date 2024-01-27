import LoginPage from "static/login.js";
import HomePage from "static/home.js";

const navigateTo = (page) => {
  history.pushState(null, "", page); // update browser url
  pageLoader();
};

const pageLoader = async () => {
  const pages = [
    { path: "/", view: HomePage },
    { path: "/login", view: LoginPage },
  ];

  const potentialMatches = pages.map((page) => {
    return {
      page: page,
      isMatch: location.pathname === page.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      page: pages[0],
      isMatch: true,
    };
  }

  if (match.page.view === HomePage) {
    document.querySelector("#content").innerHTML = await userView.renderHTML();
  }
  if (match.page.view === LoginPage) {
    document.querySelector("#content").innerHTML = await userView.renderHTML();
  }
};

window.addEventListener("popstate", pageLoader);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
});
