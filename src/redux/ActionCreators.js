import * as Actiontypes from './Actiontypes';

export const Enter = (num1, operator, num2) => ({
    type: Actiontypes.ENTER,
    payload: {
        num1 : num1,
        operand : operator,
        num2 : num2
    }
});

export const Numbers = (num) => ({
    type: Actiontypes.NUMBERS,
    payload: num
});

export const Oper = (oper) => ({
    type: Actiontypes.OPER,
    payload: oper
});

export const Clear = () => ({
    type: Actiontypes.CLEAR
});

export const Per = (num) => ({
    type: Actiontypes.PER,
    payload: num
})
