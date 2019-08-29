export const measureCell = () => {
  const cell = document.getElementById("cell")
  const geometry = cell.getBoundingClientRect();
  cell.remove();
  return {
    cellWidth: Math.ceil(geometry.width),
    cellHeight: Math.ceil(geometry.height),
  }
}
