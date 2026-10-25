import Mount from "./mount";

function MyApp() {

  let counter = 0;

  const addvalue = () => {
    counter = counter + 1;
    console.log("clicked", Math.random()); 
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