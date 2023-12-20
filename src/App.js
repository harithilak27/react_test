import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import Images from './components/images/Image'
import About from './components/about/About'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Images />
      <About />
    </div>
  );
}

export default App;
