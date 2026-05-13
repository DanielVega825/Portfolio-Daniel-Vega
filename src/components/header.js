export function Header() {
    return `
        <header class="fixed-top">
            <nav class="navbar navbar-expand-lg vintage-header">
                <div class="container">
                    <a class="navbar-brand" href="#/">
                        <img src="./assets/img/logo.svg" alt="Logo" class="logo-img">
                        Daniel Vega
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav align-items-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/acerca-de-mi">Acerca de Mi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/proyectos">Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/contacto">Contacto</a>
                            </li>
                            <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                                <button class="lang-btn active" id="btn-es">ES</button>
                                <button class="lang-btn" id="btn-en">EN</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
}