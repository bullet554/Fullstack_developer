
const defaultBoxStyle = {
    border: '1px solid black',
    padding: '16px',
    margin: '16px 16px'
}

function Box({ children, style = {} }) {
    return (
        <li style={{ ...defaultBoxStyle, ...style }}>
            {children}
        </li >
    );
}

export default Box;