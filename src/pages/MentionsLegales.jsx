import { useEffect } from 'react'

function MentionsLegales() {

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  
return (
    <>
      <section className="py-5">
        <div className="container">

          {/* Titre */}
          <div className="text-center mb-5">
            <h1 className="fw-semibold">Mentions légales</h1>
            <hr className="border-primary border-2 opacity-100 mx-auto" style={{ width: '100px' }} />
          </div>

          {/* Accordéon Bootstrap */}
          <div className="accordion" id="mentionsAccordion">

            {/* Éditeur */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#editeur"
                >
                  Editeur du site
                </button>
              </h2>
              <div id="editeur" className="accordion-collapse collapse show" data-bs-parent="#mentionsAccordion">
                <div className="accordion-body">
                  <h5 className="fw-semibold">John Doe</h5>
                  <p><i className="bi bi-building me-2 text-primary"></i>40 rue Laure Diebold</p>
                  <p><i className="bi bi-geo-alt me-2 text-primary"></i>69009 Lyon, France</p>
                  <p><i className="bi bi-telephone me-2 text-primary"></i>10 20 30 40 50</p>
                  <p><i className="bi bi-envelope me-2 text-primary"></i>john.doe@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#hebergeur"
                >
                  Hébergeur
                </button>
              </h2>
              <div id="hebergeur" className="accordion-collapse collapse" data-bs-parent="#mentionsAccordion">
                <div className="accordion-body">
                  <h5 className="fw-semibold">alwaysdata</h5>
                  <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                  <p>
                    <i className="bi bi-globe me-2 text-primary"></i>
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                      www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#credits"
                >
                  Crédits
                </button>
              </h2>
              <div id="credits" className="accordion-collapse collapse" data-bs-parent="#mentionsAccordion">
                <div className="accordion-body">
                  <h5 className="fw-semibold">Crédits</h5>
                  <p>
                    Ce site a été réalisé par John Doe, étudiant au{' '}
                    <a href="https://www.cef.fr" target="_blank" rel="noopener noreferrer">
                      Centre Européen de formation
                    </a>.
                  </p>
                  <p>
                    <em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                    <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></em>
                  </p>
                  <p>
                    <em>La favicon de ce site a été fournie par{' '}
                    <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">
                      John doe Icons erstellt von Freepik - Flaticon
                    </a></em>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default MentionsLegales