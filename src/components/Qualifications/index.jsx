import { useState} from 'react';
import './Qualifications.css';

export const Qualifications = () => {
    const[toggle, setToggle] = useState(1);

    const toggleTab= (index) => {
        setToggle(index);
    }

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
                                <h3 className="qualification__title">Front-End</h3>
                                <span className="qualification__subtitle">IFSC - Instituto</span>
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
                                <h3 className="qualification__title">Art-Director</h3>
                                <span className="qualification__subtitle">IFSC - Instituto</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atualmente
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">IFSC - Instituto</span>
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
                                <h3 className="qualification__title">Ux Expert</h3>
                                <span className="qualification__subtitle">IFSC - Instituto</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atualmente
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product-Designer</h3>
                                <span className="qualification__subtitle">IFSC - Instituto</span>
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
                                <h3 className="qualification__title">UX- Designer</h3>
                                <span className="qualification__subtitle">IFSC - Instituto</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atualmente
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">IFSC - Instituto</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Atualmente
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};