interface CellsPropType {
  value: string;
  onClick: () => void;
  className: string;
}
const Cell = (props: CellsPropType) => {
  const { value, onClick, className } = props;
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
