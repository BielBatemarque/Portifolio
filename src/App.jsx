import './App.css';
import { Header } from './components/header/index';
import { Home } from './components/home/index';
import { About } from './components/About/index';
import { Skills } from './components/Skills/index';
import { Services } from './components/Services'; 
import { Qualifications } from './components/Qualifications';


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
      </main>
    </>
  );
}

export default App;
