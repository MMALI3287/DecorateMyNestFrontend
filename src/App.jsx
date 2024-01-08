import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/elements/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        text="Submit"
        type="Submit"
        className="px-2 py-1 rounded-lg bg-blue-500 text-white"
      />
    </>
  );
}

export default App;
