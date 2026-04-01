import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS } from '../data/portfolio_data';
import { Button } from '../components/Button';
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section id="projects" className="py-6 bg-section-alternate min-vh-100 d-flex flex-column justify-content-center border-top border-secondary border-opacity-10 position-relative">
      <div className="container py-5">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />
        
        <div className="row mt-5 g-4">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <motion.div 
                className="card border-0 bg-transparent h-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flip-card-container">
                  <div className="flip-card-inner rounded-4 shadow-lg">
                    {/* Front of Card: Image */}
                    <div className="flip-card-front bg-body rounded-4 text-center">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-100 h-100 object-fit-cover rounded-4" 
                        loading="lazy"
                      />
                      {/* Optional overlay hint to hover if needed */}
                      <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 text-white rounded-bottom-4 d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">{project.title}</span>
                        <span className="small text-white-50">Hover to expand</span>
                      </div>
                    </div>
                    
                    {/* Back of Card: Details */}
                    <div className="flip-card-back rounded-4 glass-card text-center overflow-auto">
                      <h3 className="fw-bold mb-3 text-body">{project.title}</h3>
                      <p className="text-secondary fs-6 mb-4" style={{ lineHeight: 1.6 }}>
                        {project.description}
                      </p>
                      
                      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 w-100">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-medium small">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="d-flex justify-content-center gap-3 w-100 mt-auto pt-3 border-top border-secondary border-opacity-25">
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <Button variant="outline-primary" className="btn-sm d-flex align-items-center gap-2 px-3 clickable">
                              <BsGithub /> Code
                            </Button>
                          </a>
                        )}
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none border-0">
                            <Button variant="primary" className="btn-sm d-flex align-items-center gap-2 px-3 shadow-sm clickable">
                              <BsBoxArrowUpRight /> Live
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

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
