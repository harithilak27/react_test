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
    setSticky(window.pageYOffset > 300);
  }, 200); // Adjust the debounce delay as needed

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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
