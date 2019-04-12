import React from 'react';

import "../app.css"

const Operators = ({onHandleClick})=>{

    const handleClick = (e)=>{
        onHandleClick(e.target.value);
    }

    return (
        <div>
            <div><button className="button" onClick={handleClick} value="+">+</button></div>
            <div><button className="button" onClick={handleClick} value="-">-</button></div>
            <div><button className="button" onClick={handleClick} value="x">x</button></div>
            <div><button className="button" onClick={handleClick} value="/">/</button></div>
        </div>
    );
}

export default Operators;
