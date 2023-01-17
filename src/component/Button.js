import "./../css/Button.css";

function Button(props) {
    let name = props.name;
    return (
        <>
            <button id="Button">{name}</button>
        </>
    );
}

export default Button;