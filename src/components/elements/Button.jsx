// Desc: Button component

const Button = ({ type, text, onClick, className, disabled }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <>
      {type != "submit" ? (
        <button
          disabled={disabled}
          className={`${className}`}
          onClick={handleClick}
        >
          {text}
        </button>
      ) : (
        <div className="">
          <button disabled={disabled} className="" type="submit">
            {text}
          </button>
        </div>
      )}
    </>
  );
};
export default Button;
