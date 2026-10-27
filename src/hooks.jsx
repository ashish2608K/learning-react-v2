import { useState } from "react";


function Hooks() {

  const [counter, setCounter] = useState(0);

  const addvalue = () => {
    setCounter(counter + 1);
    console.log("clicked", Math.random());
    
  }

  return (
    <div className="trekCounter">
      <h2 className="heading">Trek Counter: {counter}</h2>
      <button className="counter-btn" onClick={addvalue}>How many treks have you done
      </button>

    </div>
  )
}

export default Hooks;  