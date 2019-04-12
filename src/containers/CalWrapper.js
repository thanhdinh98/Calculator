import React, {Component} from 'react';
import {connect} from 'react-redux';

import Result from '../components/Result';
import NumberWrapper from './NumberWrapper';
import OperatorWrapper from './OperatorWrapper';

class CalWrapper extends Component{

    render(){
        const {result, operator, num_1, num_2} = this.props;
        let resultRender = '';
        if(num_1 != '0') resultRender += num_1;
        if(operator != '') resultRender += operator;
        if(num_2 != '0') resultRender += num_2

        return(
            <div className='text-center mt-5'>
                <Result result={resultRender == '' ? result : resultRender}/>
                <div className="d-flex justify-content-center mt-3">
                    <NumberWrapper/>
                    <OperatorWrapper/>    
                </div>
            </div>
        );
    }
}


const mapState = (state)=>{
    return{
        result: state.result,
        operator: state.operator,
        num_1: state.num_1,
        num_2: state.num_2
    };
}

export default connect(mapState, null)(CalWrapper);