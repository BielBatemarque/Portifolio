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
        <h3>Sobre Mim</h3>
        <p>Meu Nome é Gabriel Batemarque, desde criança sempre fui apaixonado por tecnologia, assim resolvi que meu caminho será no ramo da programação. Meu conhecimento está focado no desenvolvimento Web, com tecnologias como React.Js e Next.Js, consumo de APIs, sendo voltado para o Front-End, possumo também experiência com desenvolvimento Mobile com Flutter e Dart.</p>
      </TextSection>


    </div>
  );
}

export default App;