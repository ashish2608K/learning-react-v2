import Mount from "./mount";
import { useState } from "react";


function MyApp() {

  const [counter, setCounter] = useState(0);

  const addvalue = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Mount />
      <h2>Trek Counter: {counter}</h2>
      <button onClick={addvalue}>How many treks have you done
      </button>

    </div>
  )
}

export default MyApp;  