import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontNav from './assets/components/NavBar';
import Chat from './pages/chat';
import Characters from './pages/characters';
import DiscordBot from './pages/discordbot';
import AdvancedCharacter from './pages/advancedcharacter';
import { getAvailableModules } from './assets/components/api';
import 'tailwindcss/tailwind.css';

function App() {
  
  useEffect(() => {
    async function fetchModules() {
      await getAvailableModules();
    }
    fetchModules();
  }, []);

  return (
    <Router>
      <FrontNav/>
      <main
        className="transition-all duration-100"
        style={{ paddingTop: '.25rem'}}
      >
        <Routes>
          <Route exact path="/" element={<Chat />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/discordbot" element={<DiscordBot />} />
          <Route path="/advcharacter" element={<AdvancedCharacter />} />
          <Route path="*" element={<h1 className='settings-panel-header text-xl font-bold'>404: Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
