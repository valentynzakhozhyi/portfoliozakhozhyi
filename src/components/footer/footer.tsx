
import React, {useEffect, useState } from 'react';
import styles from "./footer.module.scss"

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('counter: ', counter);
    }, [counter]);
  return (
    <div>
    <p>You clicked {count} times</p>
    <button className={styles.button} onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </div>
  )
}

export default ClickCount
