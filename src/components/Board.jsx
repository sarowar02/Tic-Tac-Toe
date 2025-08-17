import Square from "./Square";
import { useState } from "react";

let stat= null;

function calculateWinner(squares) {

    const win_lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < win_lines.length; i++) {
        const [a, b, c] = win_lines[i];

        if (squares[a] == squares[b] && squares[b] == squares[c]) return squares[a];
    }

    return null;
}

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setSIsNext] = useState(true);


    const handleClick = (i) => {
        if (squares[i] != null) return;
        let nextSquares = squares.slice();
        xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
        setSIsNext(!xIsNext);
        setSquares(nextSquares);

        let res = calculateWinner(nextSquares);
        if (res!=null) {
             stat = res + " is Win";
            console.log(stat);
        }
    }
    function handleReset(){
        setSquares(Array(9).fill(null));
        setSIsNext(true);
        stat = null;
    }
    return (
        <>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <div className="status">{stat}</div>
            {/* <button onClick={handleReset}>Reset</button> */}

            <div>
                {stat && <button onClick={handleReset}>Reset</button>}
            </div>
            
        </>
    );
}
export default Board;