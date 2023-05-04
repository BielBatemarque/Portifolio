import { useState } from 'react';
import './Services.css';

export const Services = () => {
    const[toggle, setToggle] = useState(0);

    const toggleTab= (index) => {
        setToggle(index);
    }

    return(
        <section className="services section" id="services">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O Que eu sei</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Desenvolvedor <br /> Web</h3>       
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Saiba Mais
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => setToggle(0)}></i>

                            <h3 className="services__modal-title">Desevolvedor Web</h3>
                            <p className="services__modal-description">Mais de 4 anos de conhecimento na área</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desenvolvendo Interfaces Client Side </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Criação de páginas Responsivas </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Uso de Técnologias atuais </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                     Foco na melhor experiência do usuário</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                     Criação de designs Interativos</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>        

                 <div className="services__content">
                    <div>
                        <i className="uil uil-mobile-android services__icon"></i>
                        <h3 className="services__title">Desenvolvedor <br /> Mobile</h3>       
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Saiba Mais
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Desenvolvedor Mobile</h3>
                            <p className="services__modal-description">Trabalhando por cerca de 8 meses em ambiente profissional na área</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Criação de Aplicativos </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Desenvolvimento MultPlataforma Android/IOS </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Aplicações Dinâmicos </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                     Designs Interativos </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                     Uso de técnologias Atuais</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
        </section>
    );
};