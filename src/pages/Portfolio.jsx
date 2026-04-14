import PageBanner from '../components/PageBanner'

import freshFood from '../assets/images/fresh-food.jpg'
import restaurant from '../assets/images/restaurant-japonais.jpg'
import bienEtre from '../assets/images/espace-bien-etre.jpg'
import seo from '../assets/images/seo.jpg'
import coder from '../assets/images/coder.jpg'
import screens from '../assets/images/screens.jpg'

function Portfolio() {
  const projets = [
    {
      image: freshFood,
      titre: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne',
      techno: 'Site réalisé avec PHP et MySQL',
    },
    {
      image: restaurant,
      titre: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne',
      techno: 'Site réalisé avec WordPress',
    },
    {
      image: bienEtre,
      titre: 'Espace bien-être',
      description: 'Site de vente de produits frais en ligne',
      techno: 'Site réalisé avec LARAVEL',
    },
    {
      image: seo,
      titre: 'SEO',
      description: "Amélioration du référencement d'un site e-commerce",
      techno: 'Utilisation des outils SEO',
    },
    {
      image: coder,
      titre: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      techno: 'PHP - SYMFONY',
    },
    {
      image: screens,
      titre: "Maquette d'un site web",
      description: 'Création du prototype d\'un site',
      techno: 'Réalisé avec FIGMA',
    },
  ]

  return (
    <>
      <PageBanner />

      <section className="py-5">
        <div className="container">

          {/* Titre */}
          <div className="text-center mb-5">
            <h1 className="fw-semibold">Portfolio</h1>
            <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
            <hr className="border-primary border-2 opacity-100 mx-auto" style={{ width: '100px' }} />
          </div>

          {/* Grille de cards */}
          <div className="row g-4">
            {projets.map((projet) => (
              <div key={projet.titre} className="col-12 col-md-4">
                <div className="card h-100 portfolio-card">

                  {/* Image */}
                  <img
                    src={projet.image}
                    className="card-img-top"
                    alt={projet.titre}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />

                  {/* Corps */}
                  <div className="card-body text-center">
                    <h5 className="card-title fw-semibold">{projet.titre}</h5>
                    <p className="card-text text-muted">{projet.description}</p>
                    <a href="#" className="btn btn-primary btn-sm portfolio-btn">
                      Voir le site
                    </a>
                  </div>

                  {/* Techno en bas */}
                  <div className="card-footer text-center text-muted small">
                    {projet.techno}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Portfolio