import React, {Component} from 'react';

import Result from '../components/Result';
import NumberWrapper from './NumberWrapper';

class CalWrapper extends Component{

    render(){
        return(
            <div>
                <Result/>
                <NumberWrapper/>
            </div>
        );
    }
}

export default CalWrapper;