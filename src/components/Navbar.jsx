import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-4">

        {/* Logo */}
        <NavLink className="navbar-brand fw-semibold" to="/">
          JOHN DOE
        </NavLink>

        {/* Bouton hamburger (mobile uniquement) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens de navigation */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">SERVICES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mentions-legales">MENTIONS LÉGALES</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar