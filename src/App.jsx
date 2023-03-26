import './App.css';
import { Header } from './components/header/index';
import { Home } from './components/home/index';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;
