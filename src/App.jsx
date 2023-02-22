import './App.css';
import { Header, HeaderState } from './components/header/index';
import { Logo } from './components/header/logo';

function App() {


  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>
    </div>
  );
}

export default App;