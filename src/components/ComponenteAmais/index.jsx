import './Componente.css';
import Port from '../../assets/port.png';
import { useState } from 'react';

export const Componente = () => {
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    console.log(flag1);

    const [text, setText] = useState('');

    return(
        <section className="componente container section" id='portifolio'>
            <h2 className="section__title">Portifólio</h2>
            <span className="section__subtitle">Meus Projétos</span>

            <div className="componente__container">
                <h3 style={{textAlign: 'center'}}>Projetos Pessoais</h3>
                <div className="componente__content">
                    <div className="bloco1"> 
                        <div className="conteudoBloco" onMouseEnter={() => setFlag1(true)} onMouseLeave={() => setFlag1(false)}>
                            { flag1 === true ?
                                <div className='conteudoSobre'>
                                    <div className='tecnologias'>
                                    <h4 className='title'>Portifólio Pessoal</h4>
                                        <h4 className='desc'>Técnologias Utilizadas</h4>
                                        <ul className='teclist'>
                                        <i className="uil uil-react icon icon-react" onMouseEnter={() => setText('React.Js')}></i>
                                        <i className="uil uil-java-script icon icon-js" onMouseEnter={() => setText('JavaScript')}></i>
                                        <i className="uil uil-css3-simple icon icon-css" onMouseEnter={() => setText('Css')}></i>
                                        </ul>
                                    </div>
                                        <h3 className='descTEc'>{text}</h3>
                                </div>    
                                :
                                <img src={Port} alt="Portifólio Pes'soa" className='imgb1'/>                 

                        }
                        </div>
                        <h4 className="descricaoBlobo" >Portifólio Pessoal</h4>
                    </div>

                    <div className="bloco2">
                        <div className="conteudoBloco2">
                            <h4>Em Desenvolvimento</h4>
                        </div>
                        <h4 className="descricaoBlobo">Em Breve</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};