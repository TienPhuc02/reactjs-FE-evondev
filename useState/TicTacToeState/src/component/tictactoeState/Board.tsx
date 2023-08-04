import Cell from "./Cell";

interface PropsBoardType {
  cells: string[];
  onClick: (p: number) => void;
}
const Board = (props: PropsBoardType) => {
  const { cells, onClick } = props;
  return (
    <div className="game-board">
      {cells.map((item, index) => {
        return (
          <Cell
            className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
            key={index}
            value={item}
            onClick={() => onClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Board;
