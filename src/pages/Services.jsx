import PageBanner from '../components/PageBanner'

function Services() {
  const services = [
    {
      icon: 'bi-pencil',
      titre: 'UX Design',
      description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      icon: 'bi-code-slash',
      titre: 'Développement web',
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
    },
    {
      icon: 'bi-search',
      titre: 'Référencement',
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    },
  ]

  return (
    <>
      <PageBanner />

      <section className="py-5">
        <div className="container">

          {/* Titre de la page */}
          <div className="text-center mb-5">
            <h1 className="fw-semibold">Mon offre de services</h1>
            <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
            <hr className="border-primary border-2 opacity-100 mx-auto" style={{ width: '100px' }} />
          </div>

          {/* Cards */}
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.titre} className="col-12 col-md-4">
                <div className="card h-100 text-center p-4 service-card">
                  <div className="card-body">
                    <i className={`bi ${service.icon} fs-2 text-primary mb-3 d-block`}></i>
                    <h5 className="card-title fw-semibold mb-3">{service.titre}</h5>
                    <p className="card-text text-muted">{service.description}</p>
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

export default Services