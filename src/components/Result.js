import React from 'react';

const Result = ({result})=>{
    return(
        <div className='result'>
            <span>{result}</span>
        </div>
    );
}

Result.defaultProps = {
    result: "Hello"
};

export default Result;

