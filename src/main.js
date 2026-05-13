import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { router } from './router.js';

function render() {
    const app = document.getElementById('root');
    app.innerHTML = `
        ${Header()}
        <main id="app" class="flex-fill">
        
        </main>
        ${Footer()}
    `;
}

render();
router();

window.addEventListener('hashchange', router);

window.openTab = function(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
};

window.scrollCarousel = function(direction) {
    const track = document.getElementById("projects-track");
    if (track) {
        const scrollAmount = track.clientWidth * 0.8;
        track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
};