import React from 'react';

const Result = ({result})=>{
    return(
        <div>
            {result}
        </div>
    );
}

Result.defaultProps = {
    result: "Hello"
};

export default Result;

