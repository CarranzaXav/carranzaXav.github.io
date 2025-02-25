import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import NavbarContainer from './components/Navbar/NavbarContainer';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import BackToTop from './BackToTopBtn/BackToTop'

function Loading() {
  return <h2> Loading ...</h2>
}

function App() {
  return (
    <div className={styles.App}>
      <NavbarContainer />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  )
}

export default App
