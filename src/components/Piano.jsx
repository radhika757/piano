import React, { useState } from "react";
import styles from './Piano.module.css';
import { VerticalBars } from "./VerticalBars";

export const Piano = () => {
  const defaultHeight = 200; //Default height 
  const [bars, setBars] = useState([defaultHeight, defaultHeight, defaultHeight, defaultHeight, defaultHeight].reverse());

  const increaseHeight = (index) => {
    // Settig new height 
    const newBars = Array.from({ length: bars.length }, () => defaultHeight);
    
   // the new height of clicked bar
    newBars[index] += 200;
    
    setBars(newBars);
  };

  return (
    <>
      <div className={styles['center-container']}>
        <div className={styles['piano-container']}>
          <h3>Click any bar!</h3>
          <div className={styles['bars-container']}>
            {bars.map((height, index) => (
              <VerticalBars key={index} height={height} onClick={() => increaseHeight(index)} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
