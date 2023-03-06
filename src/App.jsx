import './App.css';
import { Header } from './components/header/index';
import { Logo } from './components/header/logo';
import { ItemMenu } from './components/header/ItemMenu';
import { Body } from './components/body/index';
import { TextSection } from './components/body/SectionSimples';

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
      <hr className='hr'/>
      <Body>
        <h1>opa</h1>
        <h2>deu bom</h2>
      </Body>
      <TextSection>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam alias aperiam repellendus? Impedit at nulla q.</p>
      </TextSection>


    </div>
  );
}

export default App;