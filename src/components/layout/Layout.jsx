

import { Routes, Route } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import MobileSideBar from '../common/MobileSideBar';
import Home from '../../pages/Home';




const Layout = () => {


  return (
    <>
      <Navbar />
      <main className="mt-1/6 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Home />} />
          <Route path="/Projects" element={<Home />} />
          <Route path="/Customers" element={<Home />} />
          <Route path="/Contact" element={<Home />} />
        </Routes>
      </main>
      <MobileSideBar/>
      <Footer/>
    </>
  );
};

export default Layout;
