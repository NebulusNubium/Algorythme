const size = 11, centre = size >> 1, box = true;

for (let y = 0; y < size; y++) {
  let line = '';
  for (let x = 0; x < size; x++) {
    line += ((box ? (y >= centre - 3 && y <= centre + 3 && x >= centre - 3 && x <= centre + 3) : (y === x || y === size - x - 1)) || (y === 0 || y === size - 1 || x === 0 || x === size - 1)) ? '⬛ ' : '⬜ ';
  }
  console.log(line);
}