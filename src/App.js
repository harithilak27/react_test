import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Images from './components/images/Image';
import About from './components/about/About';
import Sticky from './components/sticky/Sticky';
import Footer from './components/footer/Footer';
import { debounce } from 'lodash';

function App() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = debounce(() => {
    setSticky(window.scrollY > 300);
  }, 500); // Adjust the debounce delay as needed

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

  return (
    <div className="App">
      {sticky ? <Sticky /> : <Navbar />}
      <Images />
      <About />
      <Footer />
    </div>
  );
}

export default App;
