import './styles.css';
import { bodyContext } from './BodyContext';
import { bodyState } from './state';

export const Body = ({children}) => {
    return(
        <bodyContext.Provider value={bodyState}>
            <section className='section'>
                {children}
            </section>
        </bodyContext.Provider>
    );
};