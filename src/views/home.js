export function Home() {
    return `
    <section class="container home-container" id="home">
        <div class="home-grid">
            
            <!-- Column 1: Profile and Socials -->
            <div class="home-column vintage-box">
                <h1 class="home-title">
                    Hola, soy Daniel <br>
                    Full/Stack Developer <br>
                    de Colombia
                </h1>

                <div class="profile-container">
                    <img src="./assets/img/perfil2.png" alt="Daniel Vega" class="profile-img">
                </div>

                <ul class="social-links">
                    <li>
                        <a href="https://www.linkedin.com/in/jose-daniel-vega-linares-software-developer/" target="_blank" class="social-link">
                            🔗 LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/DanielVega825" target="_blank" class="social-link">
                            🐙 GitHub
                        </a>
                    </li>
                    <li>
                        <a download="Cv-Daniel-Vega.pdf" href="../../assets/documents/Cv-Daniel-Vega.pdf" target="_blank" class="social-link">
                            📄 CV
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Column 2: Biography, Contact, Services -->
            <div class="home-column vintage-box">
                <div class="info-section">
                    <h3 class="info-title">BIOGRAFÍA</h3>
                    <p>
                        "¡Hola! Soy Daniel, Desarrollador Full/Stack.
                        Transformo ideas en experiencias web cautivadoras.
                        Creando desde Colombia con visión global."
                    </p>
                </div>

                <div class="info-section">
                    <h3 class="info-title">CONTACTO</h3>
                    <p>
                        Colombia, Bogotá <br>
                        danielvegalinares@hotmail.com <br>
                        +57 3238141241
                    </p>
                </div>

                <div class="info-section">
                    <h3 class="info-title">SERVICIOS</h3>
                    <p>
                        Sitios Web <br>
                        Diseño UI/UX <br>
                        Soluciones AWS <br>
                        Integración de IA
                    </p>
                </div>
            </div>

            <!-- Column 3: Stats -->
            <div class="home-column vintage-box">
                <div class="info-section text-center">
                    <h3 class="info-title">AÑOS DE EXPERIENCIA</h3>
                    <p class="info-number">01+</p>
                </div>

                <div class="info-section text-center">
                    <h3 class="info-title">PROYECTOS COMPLETADOS</h3>
                    <p class="info-number">0+</p>
                </div>

                <div class="info-section text-center">
                    <h3 class="info-title">EMPRESAS TRABAJADAS</h3>
                    <p class="info-number">01+</p>
                </div>
            </div>

        </div>
    </section>
    `;
}
