import './Componente.css';
import Port from '../../assets/port.png';
import reactSkils from '../../assets/reactSkills.png';
import conveniencia from '../../assets/conveniencia.png';
import { useState } from 'react';

export const Componente = () => {
    const [flag1, setFlag1] = useState(false);
    const [text, setText] = useState('');
    const [flag2, setFlag2] = useState(false);
    const [text2, setText2] = useState('');
    const [flag3, setFlag3] = useState(false);
    const [text3, setText3] = useState('');
    const [flag4, setFlag4] = useState(false);
    const [text4, setText4] = useState('');



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
                        <div className="conteudoBloco" onMouseEnter={() => setFlag2(true)} onMouseLeave={() => setFlag2(false)}>
                            { flag2 === true ?
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
                                <img src={reactSkils} alt="Portifólio Pes'soa" className='imgb1'/>                 

                        }
                        </div>
                        <h4 className="descricaoBlobo" >Portifólio Pessoal</h4>
                    </div>

                    <div className="bloco3"> 
                        <div className="conteudoBloco" onMouseEnter={() => setFlag3(true)} onMouseLeave={() => setFlag3(false)}>
                            { flag3 === true ?
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
                                <img src={conveniencia} alt="Portifólio Pes'soa" className='imgb1'/>                 

                        }
                        </div>
                        <h4 className="descricaoBlobo" >Portifólio Pessoal</h4>
                    </div>

                    <div className="bloco4"> 
                        <div className="conteudoBloco" onMouseEnter={() => setFlag4(true)} onMouseLeave={() => setFlag4(false)}>
                            { flag4 === true ?
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
                </div>
            </div>
        </section>
    );
};