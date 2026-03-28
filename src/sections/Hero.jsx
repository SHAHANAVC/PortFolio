import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { PERSONAL_INFO } from '../data/portfolio_data';
import { BsArrowRight, BsEnvelopePaper } from 'react-icons/bs';

export const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5 hero-gradient-bg">
      {/* Subtle background shapes */}
      <div className="position-absolute top-0 start-0 translate-middle w-50 h-50 bg-primary blur-3xl opacity-10 rounded-circle" style={{ filter: 'blur(100px)' }}></div>
      <div className="position-absolute bottom-0 end-0 translate-middle w-50 h-50 bg-info blur-3xl opacity-10 rounded-circle" style={{ filter: 'blur(100px)' }}></div>
      
      <div className="container position-relative z-1">
        <div className="row align-items-center min-vh-100 py-5 g-5">
          {/* Left Side: Content */}
          <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="fs-3 text-secondary fw-medium mb-2">Hi, I'm</h2>
              <h1 className="display-3 fw-bolder mb-3 text-body">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="mb-4">
                <h3 className="h2 text-primary fw-semibold typing-animation">
                  {PERSONAL_INFO.role}
                </h3>
              </div>
              
              <p className="fs-5 text-secondary mb-5 pe-lg-4" style={{ lineHeight: 1.8 }}>
                {PERSONAL_INFO.shortDescription}
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="text-decoration-none">
                  <Button variant="primary" className="btn-hover-scale d-flex align-items-center gap-2 py-3 px-4 shadow-sm clickable">
                    View Projects <BsArrowRight />
                  </Button>
                </a>
                <a href="#contact" className="text-decoration-none">
                  <Button variant="outline-primary" className="btn-hover-scale d-flex align-items-center gap-2 py-3 px-4 clickable">
                    <BsEnvelopePaper /> Contact Me
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
              className="position-relative d-flex align-items-center justify-content-center"
              style={{ width: '100%', maxWidth: '500px', aspectRatio: '1/1' }}
            >
              {/* Animated Blob Shape serving as an illustration frame */}
              <div className="blob-shape w-100 h-100 position-absolute d-flex align-items-center justify-content-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Profile" className="w-100 h-100 object-fit-cover opacity-75 mix-blend-overlay" loading="lazy" />
              </div>
              
              {/* Floating decorative elements */}
              <motion.div 
                className="position-absolute top-0 start-0 bg-body glass-card p-3 rounded-4 shadow-sm d-none d-md-flex align-items-center gap-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-primary rounded-circle p-2 text-white d-flex">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <span className="fw-bold text-body small">Web Developer</span>
              </motion.div>

              <motion.div 
                className="position-absolute bottom-0 end-0 bg-body glass-card p-3 rounded-4 shadow-sm d-none d-md-flex align-items-center gap-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="bg-warning rounded-circle p-2 text-dark d-flex">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <span className="fw-bold text-body small">MERN Stack</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
