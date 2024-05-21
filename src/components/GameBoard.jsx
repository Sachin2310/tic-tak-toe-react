import React, { useState, useEffect } from 'react';
import Square from './Square'

const GameBoard = () => {
    const [boardFields, setBoardFields] = useState(Array(9).fill(""));
    const [turn,setTurn] = useState('O');

    const switchTurn = (index) => {
        if(boardFields[index]!==""){
            return;
        }
        console.log("clicked");
        const copyBoardFields = [...boardFields];
        copyBoardFields[index] = turn;
        setBoardFields(copyBoardFields);
        setTurn((turn==='O')?'X':'O');
        console.log("board: "+boardFields);
    }

    //use useEffect to check the winner

    return (
        <>
            {
                boardFields.map((current, index) => {
                    return <Square key={index} value={current} turn={turn} indexValue={index} switch={(index) => switchTurn(index)}/>
                })
            }
        </>
    )
}

export default GameBoard;