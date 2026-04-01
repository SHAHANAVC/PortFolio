import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { PERSONAL_INFO } from '../data/portfolio_data';

export const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center bg-section-primary position-relative overflow-hidden">
      {/* Subtle background glow mimicking the About section */}
      {/* <div className="position-absolute top-50 start-0 translate-middle w-50 h-50 bg-primary rounded-circle opacity-10 blur-3xl" style={{ filter: 'blur(120px)' }}></div> */}
      <div className="position-absolute top-0 start-100 translate-middle w-50 h-50 bg-primary rounded-circle opacity-10 blur-3xl" style={{ filter: 'blur(120px)' }}></div>
      
      <div className="container py-2 position-relative z-1">
        <div className="row align-items-center g-5 min-vh-100">
          {/* Left Side: Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="fs-5 text-primary fw-semibold mb-2 tracking-wide text-uppercase">Hi, I'm</h2>
              <h1 className="display-4 fw-bolder mb-3 hero-heading" style={{ letterSpacing: '-0.02em' }}>
                {PERSONAL_INFO.name}
              </h1>
              
              <h3 className="h3 hero-heading fw-medium mb-4 opacity-75">
                {PERSONAL_INFO.role}
              </h3>
              
              <p className="fs-5 mb-5 pe-lg-5 hero-subtext leading-relaxed">
                {PERSONAL_INFO.shortDescription}
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="text-decoration-none">
                  <Button variant="primary" className="btn-hover-scale px-4 py-3 shadow-sm fw-medium">
                    View Projects
                  </Button>
                </a>
                <a href="#contact" className="text-decoration-none">
                  <Button variant="outline-body" className="btn-hover-scale px-4 py-3 fw-medium border-secondary border-opacity-25 bg-transparent">
                    Contact Me
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side: Visual */}
          <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="position-relative d-flex align-items-center justify-content-center hover-scale transition-all clickable"
              style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1' }}
            >
              {/* Animated Blob Shape serving as an illustration frame */}
              <div className="blob-shape w-100 h-100 position-absolute d-flex align-items-center justify-content-center overflow-hidden">
                 <img src="shahana.jpg" alt="Profile" className="w-100 h-100 object-fit-cover transition-all" loading="eager" />
                 {/* Soft inner shadow blending for premium feel */}
                 <div className="position-absolute top-0 start-0 w-100 h-100" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)', pointerEvents: 'none' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
