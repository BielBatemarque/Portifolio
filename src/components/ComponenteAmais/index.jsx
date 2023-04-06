import './Componente.css';
import Port from '../../assets/port.png';
import { useState } from 'react';

export const Componente = () => {
    const [flag, setFlag] = useState(false);
    console.log(flag);

    return(
        <section className="componente container section">
            <h2 className="section__title">Portifólio</h2>
            <span className="section__subtitle">Meus Projétos</span>

            <div className="componente__container">
                <h3 style={{textAlign: 'center'}}>Projetos Pessoais</h3>
                <div className="componente__content">
                    <div className="bloco1"> 
                        <div className="conteudoBloco" onMouseEnter={() => setFlag(true)} onMouseLeave={() => setFlag(false)}>
                            { flag === true ?
                                <div className='conteudoSobre'>
                                    <h4>Portifólio Pessoal</h4>
                                    <div className='tecnologias'>
                                        <p>Técnologias Utilizadas</p>
                                        <ul>
                                        </ul>
                                    </div>
                                </div>    
                                :
                                <img src={Port} alt="Portifólio Pessoa" className='imgb1'/>                 

                        }
                        </div>
                        <h4 className="descricaoBlobo" >Portifólio Pessoal</h4>
                    </div>

                    <div className="bloco2" onMouseEnter={() => setFlag(s => !s)} onMouseLeave={() => setFlag(s => !s)}>
                        <div className="conteudoBloco">
                        
                        </div>
                        <h4 className="descricaoBlobo">Em Breve</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};