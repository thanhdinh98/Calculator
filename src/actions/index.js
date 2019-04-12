import * as types from '../constants';


export const assignNum = (value)=>{
    return (dispatch)=>{
        dispatch({type: types.ASSIGN_NUM, data: value});
    }
}

export const assignOperator = (operator)=>{
    return (dispatch)=>{
        dispatch({type: types.ASSIGN_OPERATOR, data: operator});
    }
}

export const assignResult = ()=>{
    return (dispatch)=>{
        dispatch({type: types.ASSIGN_RESULT});
    };
}

export const restartApp = ()=>{
    return (dispatch)=>{
        dispatch({type: types.RESTART_APP});
    }
}