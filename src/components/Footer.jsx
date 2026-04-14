import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">

          {/* Colonne 1 : infos + réseaux */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-semibold mb-3">John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>
            <div className="d-flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer nofollow" className="footer-icon">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer nofollow" className="footer-icon">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer nofollow" className="footer-icon">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : liens pages */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-semibold mb-3">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="footer-link">Accueil</NavLink></li>
              <li><NavLink to="/services" className="footer-link">Services</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Me contacter</NavLink></li>
              <li><NavLink to="/mentions-legales" className="footer-link">Mentions légales</NavLink></li>
            </ul>
          </div>

          {/* Colonne 3 : dernières réalisations */}
          <div className="col-12 col-md-4">
            <h5 className="fw-semibold mb-3">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/portfolio" className="footer-link">Fresh Food</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">Restaurant Akira</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">Espace bien-être</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">SEO</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">Création d'une API</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">Maquette d'un site</NavLink></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer