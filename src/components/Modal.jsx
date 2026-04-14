import { useEffect, useState } from 'react'

function Modal({ show, onClose }) {
  const [githubData, setGithubData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then(res => res.json())
      .then(data => setGithubData(data))
  }, [])

  if (!show) return null

  return (
    <>
      {/* Fond sombre derrière la modale */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>

      {/* Fenêtre modale */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            {/* En-tête */}
            <div className="modal-header">
              <h5 className="modal-title fw-semibold">Mon profil GitHub</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            {/* Corps */}
            <div className="modal-body">
              {githubData ? (
                <div className="row align-items-center">

                  {/* Avatar */}
                  <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
                    <img
                      src={githubData.avatar_url}
                      alt={githubData.name}
                      className="img-fluid rounded"
                      style={{ maxWidth: '180px' }}
                    />
                  </div>

                  {/* Infos */}
                  <div className="col-12 col-md-7">
                    <ul className="list-unstyled">
                      <li className="py-2 border-bottom">
                        <i className="bi bi-person me-2"></i>
                        <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">
                          {githubData.name}
                        </a>
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="bi bi-geo-alt me-2"></i>
                        {githubData.location || ''}
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="bi bi-journal-text me-2"></i>
                        {githubData.bio}
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="bi bi-box me-2"></i>
                        Repositories : {githubData.public_repos}
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="bi bi-people me-2"></i>
                        Followers : {githubData.followers}
                      </li>
                      <li className="py-2">
                        <i className="bi bi-people me-2"></i>
                        Following : {githubData.following}
                      </li>
                    </ul>
                  </div>

                </div>
              ) : (
                <p className="text-center">Chargement...</p>
              )}
            </div>

            {/* Pied */}
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Fermer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Modal