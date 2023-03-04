export const ItemMenu = ({ children, onpressed }) => {
    return(
        <p onClick={onpressed}> {children}</p>
    );
};