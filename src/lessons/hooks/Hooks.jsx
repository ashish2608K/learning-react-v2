import { useState } from "react";
import styles from "./Hooks.module.css";

function Hooks() {
  // useState remembers the counter value between renders.
  const [count, setCount] = useState(0);

  return (
    <section className={styles.box}>
      <h1>Hello World</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)} type="button">
        +1
      </button>
    </section>
  );
}

export default Hooks;
