import React, { useState } from 'react';
import './MineTracingApp.css';

function MineTracingApp() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0]
  ]); // Example grid, 0 represents empty cell, 1 represents mine

  const [minesFound, setMinesFound] = useState([]);

  const traceMine = (x, y) => {
    // Implement your mine tracing algorithm here
    console.log(`Tracing mine at (${x}, ${y})`);
    setMinesFound([...minesFound, { x, y }]);
    // This is just a placeholder, replace with actual logic
  };

  const handleCellClick = (x, y) => {
    if (grid[y][x] === 1) {
      traceMine(x, y);
    } else {
      console.log(`Cell at (${x}, ${y}) is empty`);
      // Implement your logic for empty cells
    }
  };

  return (
    <div className="mine-tracing-container">
      <h1>Mine Tracing App</h1>
      <div className="grid-container">
        {grid.map((row, y) => (
          <div key={y} className="row">
            {row.map((cell, x) => (
              <div
                key={`${x}-${y}`}
                className={`cell ${cell === 1 ? 'mine' : 'empty'}`}
                onClick={() => handleCellClick(x, y)}
              >
                {/* You can display any content based on the cell value */}
                {cell === 1 ? 'M' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mines-found">
        <h2>Mines Found</h2>
        <ul>
          {minesFound.map((mine, index) => (
            <li key={index}>Mine found at ({mine.x}, {mine.y})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MineTracingApp;
