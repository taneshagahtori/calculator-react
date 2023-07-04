import "./button.css";

const button = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="button-wrapper"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default button;