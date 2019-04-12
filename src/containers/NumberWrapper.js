import React, {Component} from 'react';
import {connect} from 'react-redux';
import {assignNum, assignResult, restartApp} from '../actions/index';
import Numbers from '../components/Numbers';

class NumberWrapper extends Component{
    render(){
        return(
            <Numbers onHandleClick={this.onHandleClick}/>
        );
    }

    onHandleClick = (value)=>{
        if(value == '='){
            this.props.assignResult();
        }else if(value == 'c'){
            this.props.restartApp();
        }else{
            this.props.assignNum(value);
        }
    }
}

const mapDispatch = {
    assignNum,
    assignResult,
    restartApp
};

export default connect(null, mapDispatch)(NumberWrapper);