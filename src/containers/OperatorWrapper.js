import React, {Component} from 'react';
import {connect} from 'react-redux';
import {assignOperator} from '../actions';
import Operators from '../components/Operators';

class OperatorWrapper extends Component{
    render(){
        return(
            <Operators onHandleClick={this.onHandleClick}/>
        );
    }

    onHandleClick = (value)=>{
        this.props.assignOperator(value);
    }
}

const mapDispatch = {
    assignOperator
};

export default connect(null, mapDispatch)(OperatorWrapper);