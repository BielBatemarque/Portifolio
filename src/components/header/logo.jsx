import { useContext } from "react";
import { HeaderContext } from ".";

export const Logo = () => {
    const theContextLogo = useContext(HeaderContext);
    return (
        <h1>{theContextLogo.logo}</h1>
    );
}