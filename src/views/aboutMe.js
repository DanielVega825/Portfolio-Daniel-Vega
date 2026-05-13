export function AboutMe() {
    return `
    <section class="container about-container" id="about">
        <div class="about-grid">
            
            <div class="about-img-container">
                <img src="./assets/img/perfil2.png" alt="Daniel Vega" class="about-img">
            </div>

            <div class="about-content vintage-box">
                <h2>Acerca de Mí</h2>
                <p>
                    Soy un desarrollador apasionado por crear experiencias digitales únicas. Me enfoco en escribir código limpio, eficiente y mantener un diseño visual atractivo y funcional.
                </p>

                <div class="about-tabs mt-4">
                    <button class="tab-btn active" onclick="window.openTab(event, 'skills')">Habilidades</button>
                    <button class="tab-btn" onclick="window.openTab(event, 'experience')">Experiencia</button>
                    <button class="tab-btn" onclick="window.openTab(event, 'education')">Educación</button>
                </div>

                <div id="skills" class="tab-content active">
                    <ul class="skills-list">
                        <li class="skill-item">HTML & CSS</li>
                        <li class="skill-item">JavaScript</li>
                        <li class="skill-item">Bootstrap</li>
                        <li class="skill-item">Node.js</li>
                        <li class="skill-item">Java</li>
                        <li class="skill-item">Spring Boot</li>
                        <li class="skill-item">Docker</li>
                        <li class="skill-item">Linux</li>
                        <li class="skill-item">SQL</li>
                        <li class="skill-item">Python</li>
                        <li class="skill-item">Power BI</li>
                        <li class="skill-item">AWS</li>
                    </ul>
                </div>

                <div id="experience" class="tab-content">
                    <div class="timeline-item">
                        <h4>Desarrollador Backend Junior</h4>
                        <p class="text-muted">Empresa Growtty 2025 - 2025</p>
                        <p>mplementé la generación automatizada de documentos PDF mediante la integración de APIs RESTful, reduciendo el tiempo de generación manual de informes y garantizando la consistencia de los datos entregados al usuario final <strong>(Más información en mi CV)</strong></p>
                    </div>
                    
                </div>

                <div id="education" class="tab-content">
                    
                    <div class="timeline-item">
                        <h4>Bootcamp Full-Stack</h4>
                        <p class="text-muted">Generation - 2026</p>
                    </div>
                    <div class="timeline-item">
                        <h4>Ingeniería de Sistemas</h4>
                        <p class="text-muted">Universidad Cooperativa de Colombia - 2019 a 2025</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}
