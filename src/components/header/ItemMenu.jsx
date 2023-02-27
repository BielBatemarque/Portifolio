export const itemMenu = ({ children, onpressed }) => {
    return(
        <p onClick={onpressed}> {children}</p>
    );
};