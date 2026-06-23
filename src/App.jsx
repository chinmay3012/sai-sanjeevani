import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Doctors from './pages/Doctors.jsx';
import AyushmanBharat from './pages/AyushmanBharat.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Book from './pages/Book.jsx';
import Admin from './pages/Admin.jsx';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Parse path and search parameters from the hash
  // hash formats: "#", "#about", "#book?doctor=Dr.%20Anil%20Verma"
  const [pathWithHash, search] = currentHash.split('?');
  const path = pathWithHash || '#';

  let pageContent;
  switch (path) {
    case '#about':
      pageContent = <About />;
      break;
    case '#services':
      pageContent = <Services />;
      break;
    case '#doctors':
      pageContent = <Doctors />;
      break;
    case '#ayushman-bharat':
      pageContent = <AyushmanBharat />;
      break;
    case '#gallery':
      pageContent = <Gallery />;
      break;
    case '#contact':
      pageContent = <Contact />;
      break;
    case '#book':
      pageContent = <Book search={search || ''} />;
      break;
    case '#admin':
      pageContent = <Admin />;
      break;
    case '#':
    default:
      pageContent = <Home />;
      break;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header currentHash={path} />
      <div style={{ flex: 1 }}>
        {pageContent}
      </div>
      <Footer />
    </div>
  );
}
