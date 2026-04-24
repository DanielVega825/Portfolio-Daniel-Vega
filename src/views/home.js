export function Home() {

    return `
    <section class="home section" id="home">
                <div class="home__container container grid section__border">
                    <div class="home__data grid" data-sr-id="0"
                        style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                        <h1 class="home__title">
                            Hola, soy Daniel <br>
                            Frontend Developer <br>
                            de Colombia <br>
                        </h1>

                        <div class="home__blob grid">
                            <div class="home__perfil">
                                <img src="./assets/img/perfil2.png" alt="home perfile">
                            </div>

                            <img src="assets/img/shape-wawes.svg" class="home__shape-wawes" alt="">
                            <img src="assets/img/shape-circle.svg" alt="" class="home__shape-circle">
                        </div>

                        <ul class="home__social">
                            <a href="https://www.linkedin.com/in/daniel-quilcue/" target="_blank"
                                class="home__social-link">
                                <i class="ri-linkedin-box-line"></i>
                            </a>

                            <a href="https://github.com/DanielQuilcue" target="_blank" class="home__social-link">
                                <i class="ri-github-line"></i>
                            </a>

                            <a href="./assets/documents/Carlos-Daniel-Quilcue-Alvira.pdf" target="_blank"
                                class="home__social-link">
                                <i class="ri-file-paper-line"></i>
                            </a>
                        </ul>
                    </div>


                    <!--==================== HOME INFO 1 ====================-->
                    <div class="home__info">
                        <div>
                            <h3 class="home__info-title">
                                BIOGRAFÍA
                            </h3>

                            <p class="home__info-description">
                                "¡Hola! Soy Daniel, Desarrollador Front-End.
                                Transformo ideas en experiencias web cautivadoras.
                                Creando desde Colombia con visión global."
                            </p>
                        </div>

                        <div>
                            <h3 class="home__info-title">
                                CONTACTO
                            </h3>

                            <p class="home__info-description">
                                Colombia, Bogotá <br>
                                danielquilcue18@gmail.com <br>
                                +57 3228369024 <br>
                            </p>
                        </div>

                        <div>
                            <h3 class="home__info-title">
                                SERVICIOS
                            </h3>

                            <p class="home__info-description">
                                Sitios Web <br>
                                Diseño UI/UX <br>
                                Soluciones AWS <br>
                                Integración de IA <br>
                            </p>
                        </div>

                    </div>

                    <!--==================== HOME INFO 2 ====================-->
                    <div class="home__info">
                        <div>
                            <h3 class="home__info-title">
                                AÑOS DE EXPERIENCIA
                            </h3>

                            <p class="home__info-number">
                                04+
                            </p>
                        </div>

                        <div>
                            <h3 class="home__info-title">
                                PROYECTOS COMPLETADOS
                            </h3>

                            <p class="home__info-number">
                                12+
                            </p>
                        </div>

                        <div>
                            <h3 class="home__info-title">
                                EMPRESAS TRABAJADAS
                            </h3>

                            <p class="home__info-number">
                                04+
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    `;
}
