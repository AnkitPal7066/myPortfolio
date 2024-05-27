import React, { useState } from 'react';
import './App.css';
import Header from './comp/Header';
import Modal from './comp/Modal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './comp/Projects';
import Back from './comp/Back';
import Java from './comp/Java';
import Reacte from './comp/Reacte';
import Resume from './comp/Resume';
import { Helmet } from 'react-helmet';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="bg-[url('https://i.pinimg.com/originals/b6/62/de/b662dee2556766ccda5e79815f5636a8.jpg')] bg-cover bg-center inset-0">
        <Header setIsModalOpen={setIsModalOpen} /> {/* Pass setIsModalOpen as a prop */}
        <Helmet>
          <title>Ankit's Portfolio</title>
          <meta name='description' content='Crafting compelling digital experiences with creativity and precision. Explore my portfolio for a showcase of my latest projects and expertise in FrontEnd technologies. Get in touch to collaborate on your next project.' />
        </Helmet>
        <Routes>
          <Route path='/myPortfolio' element={<Back />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/javascript' element={<Java />} />
          <Route path='/react' element={<Reacte />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
