import React, { useState } from "react";
import styles from './Piano.module.css';
import { VerticalBars } from "./VerticalBars";

export const Piano = () => {
  const defaultHeight = 150; //Default height 
  const [bars, setBars] = useState([defaultHeight, defaultHeight, defaultHeight, defaultHeight, defaultHeight, defaultHeight, defaultHeight, defaultHeight, defaultHeight].reverse());

  const increaseHeight = (index) => {
    // Setting new height 
    const newBars = Array.from({ length: bars.length }, () => defaultHeight);

    // the new height of clicked bar
    newBars[index] += 200;

    setBars(newBars);
  };

  return (
    <>
      <div className={styles['center-container']}>
        <h1>Click any bar!</h1>
        <div className={styles['piano-container']}>
          <div className={styles['bars-container']}>
            {bars.map((height, index) => (
              <VerticalBars key={index} height={height} onClick={() => increaseHeight(index)} barNumber={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
