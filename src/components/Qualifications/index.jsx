import { useState} from 'react';
import './Qualifications.css';

export const Qualifications = () => {
    const[toggle, setToggle] = useState(1);

    const toggleTab= (index) => {
        setToggle(index);
    };

    return(
        <section className="qualification section">
            <h2 className="section__title">Qualificações </h2>
            <span className="section__subtitle">Minha Jornada Dev</span>
       
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggle === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educação
                    </div>

                    <div className={toggle === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experiências
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Técnico Informática</h3>
                                <span className="qualification__subtitle">Colégio Joseense</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Desenvolvimento Web na Prática</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> nov/2022 - jan/2023
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
                                <span className="qualification__subtitle">IFSC - Gaspar</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atualmente
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Curso React.Js e Next.Js</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atualmente
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Desenvolvedor Páginas Web</h3>
                                <span className="qualification__subtitle">Rz Sistemas</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> out/22 - abr/23
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Desenvolvedor Mobile</h3>
                                <span className="qualification__subtitle">Rz Sistemas</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> out/22 - abr/23
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Desenvodor React.Js</h3>
                                <span className="qualification__subtitle">Projetos Pessoais</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atualmente
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Desenvolvedor Web</h3>
                                <span className="qualification__subtitle">SCI Sistemas</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Atualmente
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};