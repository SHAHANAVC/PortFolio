import { SectionHeading } from '../components/SectionHeading';
import { SKILLS } from '../data/portfolio_data';
import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <section id="skills" className="py-6 bg-section-primary border-top border-secondary border-opacity-10 position-relative">
      <div className="container py-5">
        <SectionHeading title="My Skills" subtitle="Technologies and tools I work with" />
        
        <div className="row g-4 mt-5 justify-content-center">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <motion.div 
                className="card h-100 border-secondary border-opacity-10 bg-body rounded-4 p-4 p-xl-5 transition-all hover-scale"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
              >
                <div className="card-body p-0">
                  <h4 className="fw-bold mb-4 hero-heading border-bottom border-secondary border-opacity-10 pb-3">
                    {skillGroup.category}
                  </h4>
                  
                  <div className="d-flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="badge bg-body-tertiary hero-subtext fs-6 fw-medium py-2 px-3 border border-secondary border-opacity-25 rounded-2 d-flex align-items-center gap-2"
                      >
                        <img src={item.icon} alt={item.name} width="18" height="18" style={{ objectFit: 'contain' }} />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
