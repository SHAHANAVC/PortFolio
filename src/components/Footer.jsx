import { SOCIAL_LINKS } from '../data/portfolio_data';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github': return <BsGithub size={20} />;
      case 'linkedin': return <BsLinkedin size={20} />;
      case 'twitter': return <BsTwitter size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="py-3 bg-section-alternate text-center mt-auto border-top border-secondary border-opacity-10 transition-colors">
      <div className="container">
        <h4 className="fw-bolder mb-4 text-body fs-5 tracking-wide">SHAHANA</h4>
        <div className="d-flex justify-content-center gap-4 mb-4">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary text-decoration-none hover-primary transition-colors clickable p-2"
              aria-label={link.name}
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </div>
        <p className="text-secondary small mb-0 fw-medium">
          &copy; {currentYear} SHAHANA. Crafted with React.
        </p>
      </div>
    </footer>
  );
};
