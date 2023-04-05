import './App.css';
import { Header } from './components/header/index';
import { Home } from './components/home/index';
import { About } from './components/About/index';
import { Skills } from './components/Skills/index';
import { Services } from './components/Services'; 
import { Qualifications } from './components/Qualifications';
import { Componente } from './components/ComponenteAmais/index';
import { Contact } from './components/Contact/index';
import { Footer } from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Componente />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
