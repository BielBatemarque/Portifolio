import { useContext } from "react";
import { HeaderContext } from ".";
import './styles.css';

export const Logo = () => {
    const theContextLogo = useContext(HeaderContext);
    return (
        <h1 className="log">{theContextLogo.logo}</h1>
    );
}