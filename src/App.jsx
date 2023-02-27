import './App.css';
import { Header } from './components/header/index';
import { Logo } from './components/header/logo';
import { Body } from './components/body/index';

function App() {

  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>
      <Body>
        
      </Body>
    </div>
  );
}

export default App;