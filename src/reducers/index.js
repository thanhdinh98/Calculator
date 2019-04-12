import * as types from '../constants';

const initialState = {
    num_1: 0,
    num_2: 0,
    operator: '',
    result: 0
};

const calReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.ASSIGN_NUM:
            return handleAssign(state, action.data);
        case types.ASSIGN_OPERATOR:
            return {...state, operator: action.data};
        case types.ASSIGN_RESULT:
            return handleResult(state);
        case types.RESTART_APP:
            return {...state, num_1: 0, num_2: 0, operator: '', result: 0};
        default:
            return state;
    }
}

const handleAssign = (state, data)=>{

    let num_1 = null;
    let num_2 = null;

    if(state.operator == ''){
        state.num_1 == '0' ? num_1 = '' + data:
        num_1 = state.num_1 + data;    
    }else{
        state.num_2 == '0' ? num_2 = '' + data:
        num_2 = state.num_2 + data;
    }


    if(num_1 == null){
        return {
            ...state,
            num_2
        };    
    }

    return {
        ...state,
        num_1
    }
}

const handleResult = (state)=>{
    let result = null;

    switch(state.operator){
        case '+':{
            result = Number(state.num_1) + Number(state.num_2);
            return {
                ...state, 
                result: result,
                num_1: result,
                num_2: 0,
                operator: ''
            };
        }
        case '-':{
            result = Number(state.num_1) - Number(state.num_2)
            return {...state, 
                result: result,
                num_1: result,
                num_2: 0,
                operator: ''
            };
        }
        case 'x':{
            result = Number(state.num_1) * Number(state.num_2);
            return {...state, 
                result: result,
                num_1: result,
                num_2: 0,
                operator: ''
            };
        }
        case '/':{
            result = Number(state.num_1) / Number(state.num_2);
            return {...state, 
                result: result,
                num_1: result,
                num_2: 0,
                operator: ''
            };
        }
        default:
            return state;
    }
}

export default calReducer;