import './Componente.css';
import Port from '../../assets/port.png';
import reactSkils from '../../assets/reactSkills.png';
import conveniencia from '../../assets/conveniencia.png';
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FaJs} from 'react-icons/fa';
import {FaCss3} from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { FaHtml5} from 'react-icons/fa';

export const Componente = () => {
    const [flag1, setFlag1] = useState(false);
    const [text, setText] = useState('');
    const [flag2, setFlag2] = useState(false);
    const [text2, setText2] = useState('');
    const [flag3, setFlag3] = useState(false);
    const [text3, setText3] = useState('');




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
                                        <FaReact size={40} onMouseEnter={() => setText('React.Js')} />  
                                        <FaJs size={40} onMouseEnter={() => setText('JavaScript')}/>  
                                        <FaCss3 size={40} onMouseEnter={() => setText('Css')}/>  
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
                                    <h4 className='title'>React Skills</h4>
                                        <h4 className='desc'>Técnologias Utilizadas</h4>
                                        <ul className='teclist'>
                                        <FaReact size={40} onMouseEnter={() => setText2('React.Js')} />  
                                        <FaJs size={40} onMouseEnter={() => setText2('JavaScript')}/>  
                                        <SiStyledcomponents size={40} onMouseEnter={() => setText2('Styled-Components')} />
                                        </ul>
                                    </div>
                                        <h3 className='descTEc'>{text2}</h3>
                                </div>    
                                :
                                <img src={reactSkils} alt="Portifólio Pes'soa" className='imgb1'/>                 

                        }
                        </div>
                        <h4 className="descricaoBlobo" >React Skills</h4>
                    </div>

                    <div className="bloco3"> 
                        <div className="conteudoBloco" onMouseEnter={() => setFlag3(true)} onMouseLeave={() => setFlag3(false)}>
                            { flag3 === true ?
                                <div className='conteudoSobre'>
                                    <div className='tecnologias'>
                                    <h4 className='title'>Conveniência 2.0</h4>
                                        <h4 className='desc'>Técnologias Utilizadas</h4>
                                        <ul className='teclist'>
                                        <FaPython size={40} onMouseEnter={() => setText3('Python')}/>
                                        <SiDjango size={40} onMouseEnter={() => setText3('Django')}/>
                                        <FaJs size={40} onMouseEnter={() => setText3('javaScript')}/>
                                        <FaHtml5 size={40} onMouseEnter={() => setText3('HTML')}/>
                                        </ul>
                                    </div>
                                        <h3 className='descTEc'>{text3}</h3>
                                </div>    
                                :
                                <img src={conveniencia} alt="Portifólio Pes'soa" className='imgb1'/>                 

                        }
                        </div>
                        <h4 className="descricaoBlobo" >Conveniência 2.0</h4>
                    </div>

                    <div className="bloco4"> 
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