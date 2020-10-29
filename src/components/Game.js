import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const styles = {
    width: '200px',
    margin: '20px auto'
}

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)

    function handleClick(i) {
        const boardCopy = [...board];
        // Si le clique sur une case déjà occupé ou si la partie est gagné, on stop via return
        if(winner || boardCopy[i]) return;
        // Mettre un X ou un O dans la carré cliqué
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    function jumpTo() {

    }

    function renderMoves() {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    }

    return (
        <>
        <Board squares={board} onClick={handleClick} />
        <div style={styles}>
            <p>{winner ? "Winner : " + winner : 'Next Plater : ' + (xIsNext ? 'X' : 'O')}</p>
            {renderMoves()}
        </div>
        </>
    )
}

export default Game