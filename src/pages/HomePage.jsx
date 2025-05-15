import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="content-container">

        {/* Bienvenida */}
        <section id="welcome" className="welcome-section">
          <h1>Bienvenido a BiblioCloud 📚</h1>
          <h2>Tu Biblioteca Digital Inteligente</h2>
          <img
            src="/assets/imagen_principal.webp"
            alt="Lectura y conocimiento"
            className="welcome-image"
          />
        </section>

        {/* Acerca de la Biblioteca */}
        <section id="about" className="about-section">
          <h2>¿Qué es BiblioCloud?</h2>
          <p>
            BiblioCloud es una plataforma digital diseñada para facilitar el acceso a libros,
            conocimiento y recursos de lectura desde cualquier lugar. Nuestro objetivo es fomentar
            el hábito de la lectura mediante tecnología moderna y una experiencia intuitiva.
            <br /><br />
            Nuestra biblioteca ofrece una amplia colección de títulos en diferentes categorías,
            desde literatura clásica hasta recursos académicos. Con acceso por roles,
            estudiantes, docentes y lectores pueden explorar, comentar y descargar libros de forma segura.
            <br /><br />
            Nos apasiona democratizar el conocimiento y conectar a las personas con contenidos que transforman.
          </p>
        </section>

        {/* Libros destacados */}
        <section id="featured" className="projects-section">
          <h2>Libros Destacados</h2>
          <div className="project-list">
            <div className="project-item">
              <img src="/assets/project/project-1.gif" alt="Libro 1" className="project-image" />
              <h3>1984</h3>
              <p>Una novela clásica de George Orwell sobre vigilancia y libertad.</p>
            </div>
            <div className="project-item">
              <img src="/assets/project/project-2.webp" alt="Libro 2" className="project-image" />
              <h3>El Principito</h3>
              <p>Un relato profundo sobre la infancia, la amistad y lo esencial.</p>
            </div>
            <div className="project-item">
              <img src="/assets/project/project-3.webp" alt="Libro 3" className="project-image" />
              <h3>Educación en la Era Digital</h3>
              <p>Explora cómo la tecnología impacta el aprendizaje actual.</p>
            </div>
          </div>
        </section>

        {/* ¿Por qué elegirnos? */}
        <section id="why" className="why-section">
          <h2>¿Por qué elegir BiblioCloud?</h2>
          <ul className="reasons-list">
            <li><i className="fas fa-bolt"></i> Acceso rápido y seguro a más de 10.000 libros.</li>
            <li><i className="fas fa-user-graduate"></i> Plataforma pensada para estudiantes y docentes.</li>
            <li><i className="fas fa-star"></i> Recomendaciones personalizadas basadas en tus lecturas.</li>
            <li><i className="fas fa-book-open"></i> Interfaz intuitiva y futurista para disfrutar la lectura.</li>
          </ul>
        </section>

        {/* Contacto */}
        <section id="contact" className="contact-section">
          <h2>Contáctanos</h2>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>WED ....Bogotá</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>contacto@bibliocloud.com</span>
            </div>
            <div className="contact-item">
             
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
