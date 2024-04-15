import { useState, useEffect } from "react";
const Square = (props) => {
    const [boardFields, setBoardFields] = useState(Array.from({length: 9}).fill(""));
    const [turn,setTurn] = useState('O');

    const clickHandler = () => {
        console.log("clicked");
        var myElement = document.getElementById(props.indexValue);
        myElement.innerText = turn;
        setTurn((turn==='O')?'X':'O');
    }

    useEffect(() => {
        boardFields[props.indexValue] = (turn=='O')?'X':'O';
        setBoardFields(boardFields);
    },[turn])

    return (
        <div className='box' onClick={clickHandler}>
            <p id={props.indexValue}>{boardFields[props.indexValue]}</p>
        </div>
    )
}

export default Square;