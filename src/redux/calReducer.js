import * as Actiontypes from './Actiontypes';

export const initialState = [];

export const calReducer = ((state= initialState, action) => {
    switch(action.type){
        case Actiontypes.ENTER: {

            if(action.payload.operand === "+"){
                return state = action.payload.num1 + action.payload.num2;
            } 

            else if(action.payload.operand === "-"){
                return state = action.payload.num1 - action.payload.num2;
            }

            else if(action.payload.operand === "x"){
                return state = action.payload.num1 * action.payload.num2;
            }

            else if(action.payload.operand === "/"){
                return state = action.payload.num1 / action.payload.num2;
            }

            break;
        }

        case Actiontypes.NUMBERS: {
            return(
                `${state}${action.payload}`
            );
            
        }

        case Actiontypes.OPER: {
            return(
                `${state}${action.payload}`
            );
        }

        case Actiontypes.CLEAR: {
            return(
                []
            );
        }

        case Actiontypes.PER: {
            return(
                state = action.payload/100
            );
        }

        default: {
            return(
                state
            );
        }
    };
})