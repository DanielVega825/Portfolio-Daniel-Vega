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