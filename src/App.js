
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SectionProvider from './context/SectionContext';
import './index.css';


function App() {
  return (
    <SectionProvider>
      <Router>
        <Layout />
      </Router>
    </SectionProvider>
  );
}

export default App;
