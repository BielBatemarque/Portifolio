import './App.css';
import { Header } from './components/header/index';
import { Logo } from './components/header/Logo';
import { Body } from './components/body/index';
import { useEffect, useState } from 'react';

function App() {
  const [bool, setBool] = useState(false);


  useEffect(() => {
    console.log('disparado', bool)
  }, [bool]);
  return (
    <div className="App">
      <Header>
          <Logo />
      </Header>
      <Body>
        <p>section Principal</p>
        <button onClick={() => setBool((s) => !s)}>trocaTeste</button>
      </Body>
    </div>
  );
}

export default App;