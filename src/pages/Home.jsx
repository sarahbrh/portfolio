import { useState, useEffect } from 'react'
import heroImg from '../assets/images/hero-bg.jpg'
import aboutImg from '../assets/images/john-doe-about.jpg'
import Modal from '../components/Modal'

function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* HERO */}
      <section
        className="hero d-flex align-items-center justify-content-center text-white text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div>
          <h1 className="display-4 fw-semibold">Bonjour, je suis John Doe</h1>
          <h2 className="fs-3 fw-semibold mb-4">Développeur web full stack</h2>
          <button
            className="btn btn-danger px-4 py-2"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* À PROPOS + COMPÉTENCES */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 p-4 shadow-sm rounded">

            {/* Colonne gauche : À propos */}
            <div className="col-12 col-md-6">
              <h2 className="fw-semibold mb-2">A propos</h2>
              <hr className="border-primary border-2 opacity-100 mb-4" style={{width: '60px'}} />
              <img
                src={aboutImg}
                alt="John Doe"
                className="img-fluid mb-4"
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
            </div>

            {/* Colonne droite : Compétences */}
            <div className="col-12 col-md-6">
              <h2 className="fw-semibold mb-2">Mes compétences</h2>
              <hr className="border-primary border-2 opacity-100 mb-4" style={{width: '60px'}} />

              {[
                { label: 'HTML5', value: 90, color: 'bg-danger' },
                { label: 'CSS3', value: 80, color: 'bg-info' },
                { label: 'JAVASCRIPT', value: 70, color: 'bg-warning' },
                { label: 'PHP', value: 60, color: 'bg-success' },
                { label: 'REACT', value: 50, color: 'bg-primary' },
              ].map((skill) => (
                <div key={skill.label} className="mb-3">
                  <p className="mb-1 fw-semibold">{skill.label} {skill.value}%</p>
                  <div className="progress">
                    <div
                      className={`progress-bar ${skill.color}`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* MODALE */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default Home