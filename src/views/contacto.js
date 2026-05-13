export function Contacto() {
    return `
    <section class="container contact-container" id="contacto">
        <div class="contact-header">
            <h2>Ponte en Contacto</h2>
            <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>

        <div class="contact-grid">
            
            <div class="contact-info vintage-box">
                <h3>Información de Contacto</h3>
                <p class="mb-4">Escríbeme para cualquier consulta, colaboración o propuesta de proyecto. Estaré encantado de responderte lo antes posible.</p>
                
                <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <div>
                        <strong>Email</strong><br>
                        danielvegalinares@hotmail.com
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div>
                        <strong>Teléfono</strong><br>
                        +57 3238141241
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div>
                        <strong>Ubicación</strong><br>
                        Bogotá, Colombia
                    </div>
                </div>
            </div>

            <div class="contact-form vintage-box">
                <h3>Envíame un Mensaje</h3>
                <form onsubmit="event.preventDefault(); alert('Mensaje enviado (simulación)');">
                    <div class="form-group">
                        <label class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Tu nombre" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="tu@email.com" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Asunto</label>
                        <input type="text" class="form-control" placeholder="Asunto del mensaje" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Mensaje</label>
                        <textarea class="form-control" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn-submit">Enviar Mensaje</button>
                </form>
            </div>

        </div>
    </section>
    `;
}
