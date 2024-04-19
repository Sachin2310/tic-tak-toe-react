
const Square = (props) => {
    const clickHandler = () => {
        let element = document.getElementById(props.indexValue);
        element.innerText = props.turn;
        props.switch(props.indexValue)
    }
    return (
        <div className='box' onClick={clickHandler}>
            <p id={props.indexValue}>{props.value}</p>
        </div>
    )
}

export default Square;