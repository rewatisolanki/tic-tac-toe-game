import React from 'react';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className={`h-20 w-20 border-2 border-indigo-400 rounded-lg text-4xl font-bold 
        ${!value && 'hover:bg-indigo-50'} 
        ${value === 'X' ? 'text-indigo-600' : 'text-pink-500'} 
        transition-colors duration-200`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;