export function Proyectos() {
    let projectsHTML = '';
    for (let i = 1; i <= 7; i++) {
        projectsHTML += `
            <div class="project-card vintage-box">
                <div class="project-img-placeholder">
                    <span>🖼️</span>
                </div>
                <div class="project-info">
                    <h3 class="project-title">Proyecto ${i}</h3>
                    <p class="project-desc">Descripción del proyecto ${i}. Espacio en blanco listo para ser llenado con tu próximo gran trabajo.</p>
                </div>
            </div>
        `;
    }

    return `
    <section class="container projects-container" id="proyectos">
        <div class="projects-header">
            <h2>Mis Proyectos</h2>
            <p>Explora mi portafolio de trabajos recientes.</p>
        </div>

        <div class="carousel-container">
            <button class="carousel-btn carousel-prev" onclick="window.scrollCarousel(-1)">&#8249;</button>
            <div class="carousel-track" id="projects-track">
                ${projectsHTML}
            </div>
            <button class="carousel-btn carousel-next" onclick="window.scrollCarousel(1)">&#8250;</button>
        </div>
    </section>
    `;
}
