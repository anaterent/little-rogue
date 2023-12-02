import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.sass';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQPage from './pages/FAQPage';
import ImageBoard from './components/ImageBoard';



function App() {
  return (
    <Router>
      <div className='top-level'>
        {/* left panel */}
        <Header />
        {/* right panel */}
        <div className='right-panel'>
          {/* content + footer (middle part) */}
          <div className='contentNfooter'>
            {/* content */}
            <div className='content'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
              </Routes>
            </div>

            {/* footer */}
            <Footer />
          </div>
          {/* image board */}
          <ImageBoard />

        </div>

      </div>

    </Router>
  );
}

export default App;
