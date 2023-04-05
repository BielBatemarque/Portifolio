import './Footer.css';

export const Footer = () => {
    return(
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Gabriel</h1>

            <ul className="footer__list">
                <li>
                  <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                  <a href="#skills" className="footer__link">Projects</a>
                </li>

                <li>
                  <a href="@portifolio" className="footer__link">Extra</a>
                </li>
                    <br />
                <div className="footer__social">
                <a href="https://www.instagram.com/bielbatemarque/" className="home__social-icon" target="_blank">
             <i className="bx uil-instagram"></i>
           </a>

           <a href="https://github.com/BielBatemarque" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a> 

            <a href="https://www.linkedin.com/in/gabriel-batemarque/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a> 
                    
                </div>
                <span className="footer__copy">&#169; Feito por Gabriel Santos</span>
            </ul>
        </div>
    </footer>
    );
}