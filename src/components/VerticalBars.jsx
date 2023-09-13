import React from 'react';
import style from './VerticalBars.module.css';

export const VerticalBars = ({ height, onClick, barNumber }) => {
    return (
        <div
            className={style['vertical-bar']}
            style={{ height: `${height}px`, position: 'relative' }}
            onClick={onClick}
        >
            {/* Bar numbers */}
            <div
                className={style['bar-nums']}
            >
                {barNumber}
            </div>
        </div>
    );
};


