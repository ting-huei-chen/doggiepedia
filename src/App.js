import logo from './logo.svg';

import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Breed from './components/Breed.js';
import Resources from './components/Resources.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        {/* Header: logo and navigation */}
        <Header/>
        <Routes>
              <Route path='/' element={<Gallery />}></Route>
              <Route path='/breed/:name' element={<Breed />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/resources' element={<Resources />}></Route>
              {/* <Route path="/search/:type/:searchTerm" element={<SearchResults />}></Route> */}
              </Routes>
        {/* Footer: copyrights and attributions and links */}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
