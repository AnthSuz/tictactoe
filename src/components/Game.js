import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)

    function handleClick() {

    }

    function jumpTo() {

    }

    function renderMoves() {

    }

    return (
        <>
        <Board squares={board} onClick={handleClick} />
        </>
    )
}

export default Game