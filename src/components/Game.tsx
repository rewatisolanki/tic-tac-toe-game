import React, { useState } from 'react';
import Board from './Board';

const Game: React.FC = () => {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((_, move) => {
    const description = move > 0 
      ? `Go to move #${move}` 
      : 'Start new game';
    
    return (
      <li key={move} className="mb-2">
        <button
          className={`px-4 py-2 rounded-md text-sm
            ${move === currentMove
              ? 'bg-indigo-600 text-white'
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            } transition-colors duration-200`}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 p-8">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Game History</h2>
        <ol className="list-none">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;