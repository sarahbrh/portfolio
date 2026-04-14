import PageBanner from '../components/PageBanner'

function Contact() {
  return (
    <>
      <PageBanner />

      <section className="py-5">
        <div className="container">

          {/* Titre */}
          <div className="text-center mb-5">
            <h1 className="fw-semibold">Contact</h1>
            <p className="text-muted">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <hr className="border-primary border-2 opacity-100 mx-auto" style={{ width: '100px' }} />
          </div>

          {/* Contenu : formulaire + coordonnées */}
          <div className="row shadow-sm rounded p-4">

            {/* Colonne gauche : formulaire */}
            <div className="col-12 col-md-6 border-end">
              <h2 className="fw-semibold mb-2">Formulaire de contact</h2>
              <hr className="border-primary border-2 opacity-100 mb-4" style={{ width: '60px' }} />

              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Votre nom" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Votre adresse email" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Sujet" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Votre message" rows="8" required></textarea>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary px-4">Envoyer</button>
              </div>
            </div>

            {/* Colonne droite : coordonnées + map */}
            <div className="col-12 col-md-6 ps-md-5 mt-4 mt-md-0">
              <h2 className="fw-semibold mb-2">Mes coordonnées</h2>
              <hr className="border-primary border-2 opacity-100 mb-4" style={{ width: '60px' }} />

              <p className="fw-semibold mb-3">John Doe</p>
              <p><i className="bi bi-building me-2 text-primary"></i>40 rue Laure Diebold</p>
              <p><i className="bi bi-geo-alt me-2 text-primary"></i>69009 Lyon, France</p>
              <p><i className="bi bi-telephone me-2 text-primary"></i>10 20 30 40 50</p>
              <p><i className="bi bi-envelope me-2 text-primary"></i>john.doe@gmail.com</p>

              {/* Google Map */}
              <div className="mt-3">
                <iframe
                    title="Localisation John Doe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.2!2d4.8!3d45.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb3b2a2b2b2b%3A0x0!2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                    height="300"
                    style={{ border: 0, width: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact