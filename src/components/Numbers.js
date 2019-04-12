import React from 'react';
import "../app.css";

const Numbers = ({onHandleClick})=>{

    const handleClick = (e)=>{
        onHandleClick(e.target.value);
    }

    return(
        <div>
            <div>
                <button className="button" onClick={handleClick} value="1">1</button>
                <button className="button" onClick={handleClick} value="2">2</button>
                <button className="button" onClick={handleClick} value="3">3</button>
            </div>
            <div>
                <button className="button" onClick={handleClick} value="4">4</button>
                <button className="button" onClick={handleClick} value="5">5</button>
                <button className="button" onClick={handleClick} value="6">6</button>
            </div>
            <div>
                <button className="button" onClick={handleClick} value="7">7</button>
                <button className="button" onClick={handleClick} value="8">8</button>
                <button className="button" onClick={handleClick} value="9">9</button>
            </div>
            <div>
                <button className="button" onClick={handleClick} value="0">0</button>
                <button className="button" onClick={handleClick} value="c">C</button>
                <button className="button" onClick={handleClick} value="=">=</button>
            </div>
        </div>
    );
}

export default Numbers;