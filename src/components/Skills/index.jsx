import './Skills.css';
import { Backend } from './Backend';
import { FrontEnd } from './Frontend';

export const Skills = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades </h2>
            <span className="section__subtitle">Habilidades Técnicas</span>
        
            <div className="skills__container container grid">
                <FrontEnd />
                <Backend />
            </div>
        </section>
    );
};