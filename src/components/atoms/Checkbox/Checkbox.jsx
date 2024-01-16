import "./Checkbox.style.scss";
const Checkbox = ({ text, display, checked }) => {
  return (
    <div
      style={{
        display: { display },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <input
        type="checkbox"
        className="ui-checkbox"
        {...(checked === "true" ? { checked } : null)}
      ></input>
      <label
        style={{
          marginLeft: "10px",
          position: "relative",
          top: "-2px",
        }}
        className="ui-checkbox-label"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
