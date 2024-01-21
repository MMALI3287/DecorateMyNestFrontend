// Desc: Button component
import "./Button.style.scss";
const Button = ({ type, text, onClick, className, disabled }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      {type != "submit" ? (
        <button
          disabled={disabled}
          className={`${className} button-base `}
          onClick={handleClick}
        >
          {text}
        </button>
      ) : (
        <div className="input-group">
          <button disabled={disabled} className="button-base" type="submit">
            {text}
          </button>
        </div>
      )}
    </>
  );
};
export default Button;
