import './Componente.css';

export const Componente = () => {
    return(
        <section className="componente container section">
            <h2 className="section__title">Conteudo Extra</h2>
            <span className="section__subtitle">Conteudo Extra</span>

            <div className="componente__container">
                <h3 style={{textAlign: 'center'}}>componente Extra</h3>
                <div className="componente__content">
                    <div className="conteudo cont1">
                        <p>Conteudo para Bloco1</p>
                    </div>
                    <div className="conteudo cont2">Conteudo para bloco 2</div>
                </div>
            </div>
        </section>
    );
};