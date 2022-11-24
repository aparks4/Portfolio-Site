import './App.css';
import './static/styles/Home.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MobileNav from './components/MobileNav';
import { useState, useEffect } from 'react';

function App(props) {
  const [clicked, setClicked] = useState(false);
  const [hash, setHash] = useState(false);
  const handleClick = async (e) => {
      e.preventDefault();
      setClicked(true);
      console.log('clicked');
  }
  const redirect = async (e) => {
    e.preventDefault();
    setClicked(false);
  }
  useEffect(() => {
      window.history.pushState({}, null, '/');
  }, [clicked]);
  return (
    clicked ? <MobileNav redirect={redirect}/> :
    <div className="App">
      <Nav handleClick={handleClick} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
