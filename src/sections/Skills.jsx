import { SectionHeading } from '../components/SectionHeading';
import { SKILLS } from '../data/portfolio_data';
import { motion } from 'framer-motion';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-6 min-vh-100 d-flex flex-column justify-content-center position-relative">
      <div className="container py-5">
        <SectionHeading title="My Skills" subtitle="Technologies and tools I work with" />
        
        <div className="row g-4 mt-5 justify-content-center">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <motion.div 
                className="card h-100 border-0 glass-card rounded-4 p-4 p-xl-5 transition-all clickable"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-body p-0">
                  <h4 className="fw-bold mb-4 text-body d-flex align-items-center">
                    {skillGroup.category}
                  </h4>
                  
                  <motion.div 
                    className="d-flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {skillGroup.items.map((item, i) => (
                      <motion.span 
                        key={i} 
                        variants={itemVariants} 
                        className="badge bg-body-secondary text-body fs-6 fw-medium py-2 px-3 border border-secondary border-opacity-10 shadow-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
