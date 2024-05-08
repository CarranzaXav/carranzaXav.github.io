import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './App.module.css';
import { Hero } from "./components/Hero/Hero";
import NavbarContainer from './components/Navbar/NavbarContainer';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <NavbarContainer />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
