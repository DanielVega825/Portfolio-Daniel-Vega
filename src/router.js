import { Home } from "./views/home";

const routes = {
    "/": Home,
};

export function router() {
    const path = window.location.pathname;
    const view = routes[path] || Home;
    document.getElementById("root").innerHTML = view();
}