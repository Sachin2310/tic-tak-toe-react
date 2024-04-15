import React from 'react';
import Square from './Square'

const GameBoard = () => {

    //have the usestate here so that the child has one state, and remove from other
    return (
        <>
            {
                Array.from({length: 9}).fill("").map((current, index) =>{
                    //we can use set state for changing the variable and the use effect to set that value in array
                    return <Square key={index} value={current} indexValue={index}/>
                })
            }
        </>
    )
}

export default GameBoard;