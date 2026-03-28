import { SectionHeading } from '../components/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolio_data';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-6 position-relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="position-absolute top-50 start-100 translate-middle w-50 h-50 bg-primary rounded-circle opacity-10 blur-3xl" style={{ filter: 'blur(120px)' }}></div>
      
      <div className="container py-5 position-relative z-1">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="row align-items-center justify-content-center mt-5">
          <div className="col-lg-8 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="h2 fw-bold mb-4">A bit about my journey</h3>
              <p className="text-secondary fs-5" style={{ lineHeight: 1.8 }}>
                {PERSONAL_INFO.aboutText}
              </p>
              
              <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center justify-content-lg-start">
                <div className="badge border border-primary text-primary bg-body rounded-pill py-2 px-4 shadow-sm fs-6">
                  Problem Solver
                </div>
                <div className="badge border border-primary text-primary bg-body rounded-pill py-2 px-4 shadow-sm fs-6">
                  Continuous Learner
                </div>
                <div className="badge border border-primary text-primary bg-body rounded-pill py-2 px-4 shadow-sm fs-6">
                  Team Player
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
