export const ItemMenu = ({ children, onpressed }) => {
    return(
        <p onClick={onpressed} className='itemMenu'> {children}</p>
    );
};