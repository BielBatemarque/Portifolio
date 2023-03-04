import './styles.css';
import { bodyContext } from './BodyContext';

export const Body = ({children}) => {
    return(
        <bodyContext.Provider>
            <section className='section'>
                {children}
            </section>
        </bodyContext.Provider>
    );
};