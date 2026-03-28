import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <Navbar />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
