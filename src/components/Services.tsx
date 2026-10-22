import { useState } from 'react';
import { services } from '../data/services';
import '../styles/services.css';

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(0);

  return (
    <section id="services" className="container services-section" aria-labelledby="services-heading">
      <div className="services-intro">
        <p className="section-kicker">What I do</p>
        <h2 id="services-heading">Services &amp; Other</h2>
      </div>

      <div className="services-list">
        {services.map((service, index) => {
          const isOpen = openService === index;

          return (
            <article className={`service-item${isOpen ? ' is-open' : ''}`} key={service.title}>
              <h3>
                <button
                  className="service-toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`service-description-${index}`}
                  onClick={() => setOpenService(isOpen ? null : index)}
                >
                  <span>{service.title}</span>
                  <span className="service-icon" aria-hidden="true">+</span>
                </button>
              </h3>
              <div
                className="service-description"
                id={`service-description-${index}`}
                hidden={!isOpen}
              >
                <p>{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}