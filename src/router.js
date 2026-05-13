import { Home } from "./views/home.js";
import { AboutMe } from "./views/aboutMe.js";
import { Proyectos } from "./views/proyectos.js";
import { Contacto } from "./views/contacto.js";

const routes = {
    "": { view: Home, css: "./assets/css/home.css" },
    "#": { view: Home, css: "./assets/css/home.css" },
    "#/": { view: Home, css: "./assets/css/home.css" },
    "#/acerca-de-mi": { view: AboutMe, css: "./assets/css/aboutMe.css" },
    "#/proyectos": { view: Proyectos, css: "./assets/css/proyectos.css" },
    "#/contacto": { view: Contacto, css: "./assets/css/contacto.css" }
};

export function router() {
    let path = window.location.hash;
    console.log("Ruta actual:", path);
    const matched = routes[path] || routes["#/"];
    console.log("Ruta coincidente:", matched);


    // Normalizar: si la ruta es una función, convertirla a objeto {view, init}
    const route = typeof matched === "function"
        ? { view: matched, init: null }
        : matched;



    // 1. Manejo del CSS dinámico
    let cssPath = "";
    if (path === "#/") cssPath = "assets/css/home.css";
    if (path === "#/acerca-de-mi") cssPath = "assets/css/aboutMe.css";
    if (path === "#/proyectos") cssPath = "assets/css/proyectos.css";
    if (path === "#/contacto") cssPath = "assets/css/contacto.css";

    const appContainer = document.getElementById("app");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    
    
    

    const renderView = () => {
        appContainer.innerHTML = route.view();
        if (route.init) {
            route.init();
        }


        // Mostrar el contenedor con una suave transición
        appContainer.style.opacity = "1";
    }


    // Set the view
    // Set the specific CSS for the page
    const pageStyle = document.getElementById("page-style");
    if (pageStyle) {
        // Ocultamos temporalmente para evitar FOUC
        appContainer.style.transition = "opacity 0.2s ease-in-out";
        appContainer.style.opacity = "0";

        console.log("CSS a cargar:", cssPath);
        if (cssPath) {
            // Si el CSS ya es el mismo, no lo volvemos a cargar
            if (pageStyle.href.includes(cssPath)) {
                renderView();
            } else {
                // Si es un CSS nuevo, esperamos a que cargue
                pageStyle.onload = () => {
                    renderView();
                    pageStyle.onload = null; // Limpiar evento
                };
                pageStyle.href = cssPath;
            }
        } else {
            // Si la ruta no tiene CSS específico
            pageStyle.href = "";
            renderView();
        }
        
    }else {
        renderView()
    }
}