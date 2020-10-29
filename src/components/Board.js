import React from 'react'
import Square from './Square'

function Board({squares, onClick}) {
    return (
        <>
        <Square value="1" onClick={() => onClick("Hello Word")} />
        <Square value="2" onClick={() => onClick("Hello Word")} />
        <Square value="3" onClick={() => onClick("Hello Word")} />
        <Square value="4" onClick={() => onClick("Hello Word")} />
        <Square value="5" onClick={() => onClick("Hello Word")} />
        <Square value="6" onClick={() => onClick("Hello Word")} />
        <Square value="7" onClick={() => onClick("Hello Word")} />
        <Square value="8" onClick={() => onClick("Hello Word")} />
        <Square value="9" onClick={() => onClick("Hello Word")} />
        </>
    )
}

export default Board