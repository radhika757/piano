import React, { useState } from 'react';
import style from './VerticalBars.module.css';

export const VerticalBars = ({ height, onClick }) => {
    return (
        <div
            className={style['vertical-bar']}
            style={{ height: `${height}px` }}
            onClick={onClick}
        ></div>
    );
};


