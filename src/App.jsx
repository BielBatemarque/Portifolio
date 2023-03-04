import './App.css';
import { Header } from './components/header/index';
import { Logo } from './components/header/logo';
import { ItemMenu } from './components/header/ItemMenu';
import { Body } from './components/body/index';

function App() {

  return (
    <div className="App">
      <Header>
        <Logo />
        <ItemMenu children={'boa'} onpressed={() => console.log('safe')}/>
        <ItemMenu>Sobre Mim</ItemMenu>
        <ItemMenu>Projetos</ItemMenu>
        <ItemMenu>Habilidades</ItemMenu>
      </Header>
      <hr />
      <Body>
        <h1>opa</h1>
        <h2>deu bom</h2>
      </Body>


    </div>
  );
}

export default App;