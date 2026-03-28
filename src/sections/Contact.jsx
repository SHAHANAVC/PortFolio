import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { PERSONAL_INFO } from '../data/portfolio_data';
import { motion } from 'framer-motion';
import { BsEnvelopeFill, BsGeoFill } from 'react-icons/bs';

export const Contact = () => {
  return (
    <section id="contact" className="py-6 position-relative min-vh-100 d-flex flex-column justify-content-center">
      <div className="container py-5">
        <SectionHeading title="Get In Touch" subtitle="Let's build something beautiful together." />
        
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-4 p-md-5 rounded-4"
            >
              <div className="text-center mb-5">
                <p className="text-secondary fs-5 mb-4">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="d-flex justify-content-center gap-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-decoration-none text-body d-flex align-items-center gap-2 clickable hover-primary transition-colors">
                    <BsEnvelopeFill /> <span className="fw-medium">{PERSONAL_INFO.email}</span>
                  </a>
                  <span className="text-secondary d-flex align-items-center gap-2 fw-medium">
                    <BsGeoFill /> Remote
                  </span>
                </div>
              </div>
              
              <form className="row g-4" onSubmit={(e) => e.preventDefault()}>
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control bg-transparent text-body border-0 border-bottom border-2 border-secondary border-opacity-25 rounded-0 px-0 shadow-none pb-2 transition-colors clickable" 
                    style={{ '--bs-border-color': 'var(--bs-primary)' }}
                    placeholder="Name" 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control bg-transparent text-body border-0 border-bottom border-2 border-secondary border-opacity-25 rounded-0 px-0 shadow-none pb-2 transition-colors clickable" 
                    placeholder="Email" 
                    required 
                  />
                </div>
                <div className="col-12 mt-5">
                  <textarea 
                    className="form-control bg-transparent text-body border-0 border-bottom border-2 border-secondary border-opacity-25 rounded-0 px-0 shadow-none pb-2 transition-colors clickable" 
                    rows="3" 
                    placeholder="Message" 
                    required
                  ></textarea>
                </div>
                <div className="col-12 mt-5 text-center">
                  <Button type="submit" variant="primary" className="btn-hover-scale px-5 py-3 fs-6 clickable fw-semibold">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style>{`
        .form-control:focus {
          box-shadow: none !important;
          border-color: var(--bs-primary) !important;
          border-opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
