import React from 'react';
import Calculator from './calculator';
import Display from './display';
import {connect} from 'react-redux';
import {Enter, Numbers, Oper, Clear, Per} from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return({
      state: state
    });
}

const mapDispatchToProps = (dispatch) => ({
    Enter: (num1, operand, num2) => dispatch(Enter(num1, operand, num2)),
    Numbers: (num) => dispatch(Numbers(num)),
    Oper: (oper) => dispatch(Oper(oper)),
    Clear: () => dispatch(Clear()),
    Per: (num) => dispatch(Per(num))
});

function Main(props){
    
    return(
        <>
            <Display state = {props.state} />
            <Calculator state = {props.state} Enter = {props.Enter} Numbers = {props.Numbers} Oper = {props.Oper} Clear = {props.Clear} Per = {props.Per} />
        </>
    );
}

export default (connect(mapStateToProps, mapDispatchToProps)(Main));