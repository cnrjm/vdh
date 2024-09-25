import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { TitleProvider } from './components/TitleContext';
import AppLayout from './components/AppLayout';
import About from './components/About';
import Collaborations from './components/Collab';
import Press from './components/Press';
import Contact from './components/Contact';

const App = () => {
  return (
      <TitleProvider>
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/collaborations" element={<Collaborations />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AppLayout>
        </Router>
      </TitleProvider>
  );
};

export default App;