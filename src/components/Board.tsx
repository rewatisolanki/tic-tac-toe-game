import React from 'react';
import Square from './Square';
import { calculateWinner } from '../utils/gameLogic';

interface BoardProps {
  squares: (string | null)[];
  xIsNext: boolean;
  onPlay: (squares: (string | null)[]) => void;
}

const Board: React.FC<BoardProps> = ({ squares, xIsNext, onPlay }) => {
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? "It's a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl font-bold text-indigo-600">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;