import {React, useState} from 'react';

export default function Calculator(props){
    
    var [total1, setTotal1] = useState('');
    var [total2, setTotal2] = useState('');
    var [flag, setFlag] = useState(false);
    // var [per, setPer] =  useState(false);
    var [operand, setOperand] = useState('');

 
    const handleNumber = (num) => {

        props.Numbers(num);
        if(flag === false){
            setTotal1(`${total1}${num}`);
            // setTotal1(total1.concat(num));
        }

        else if(flag === true){
            setTotal2(`${total2}${num}`);
            // setTotal2(total2.concat(num));
        }
        
    }

    const handleOper = (oper) => {
        setOperand(oper);
        setFlag(!flag);
        props.Oper(oper);
    }

    const handleAction = (num1, operator, num2) => {
        console.log(num1, num2);
        if(operator === "%"){
            props.Per(num1);
        }
        else{
            props.Enter(Number(num1), operator, Number(num2));
        }
        
        setFlag(false);
        setTotal1('');
        setTotal2('');
        
    }

    const handleClear = () => {
        props.Clear();
        setTotal1('');
        setTotal2('');
    }

    return(
        <div className="calculator ">

            <div>
                <button onClick = { () => handleClear()} className="col-6 bg-danger p-3">Clear</button>
                <button value = "%" onClick = { () => handleOper("%") } className="col-3 bg-warning p-3">%</button>
                <button value = "+" onClick = { () => handleOper("+")} className="col-3 bg-warning p-3">+</button>
            </div>

            <div>
                <button value = {1} onClick={ () => handleNumber(1) } className="col-3 colour1 p-3">1</button>
                <button value = {2} onClick={ () => handleNumber(2) } className="col-3 colour1 p-3">2</button>
                <button value = {3} onClick={ () => handleNumber(3) } className="col-3 colour1 p-3">3</button>
                <button value = "-" onClick = { () => handleOper("-")} className="col-3 bg-warning p-3">-</button>
            </div>

            <div>
                <button value = {4} onClick={ () => handleNumber(4) } className="col-3 colour1 p-3">4</button>
                <button value = {5} onClick={ () => handleNumber(5) } className="col-3 colour1 p-3">5</button>
                <button value = {6} onClick={ () => handleNumber(6) } className="col-3 colour1 p-3">6</button>
                <button value = "x" onClick = { () => handleOper("x")} className="col-3 bg-warning p-3">x</button>
            </div>

            <div>
                <button value = {7} onClick={ () => handleNumber(7) } className="col-3 colour1 p-3">7</button>
                <button value = {8} onClick={ () => handleNumber(8) } className="col-3 colour1 p-3">8</button>
                <button value = {9} onClick={ () => handleNumber(9) } className="col-3 colour1 p-3">9</button>
                <button value = "/" onClick = { () => handleOper("/")} className="col-3 bg-warning p-3">/</button>
            </div>

            <div>
                <button value = "." onClick = { () => handleNumber('.')} className="col-3 colour1 p-3">.</button>
                <button value = {0} onClick={ () => handleNumber(0) } className="col-3 colour1 p-3">0</button>
                <button value = {(0)+(0)} onClick={ () => handleNumber(`${0}${0}`) } className="col-3 colour1 p-3">00</button>
                <button onClick = { () => handleAction(total1, operand, total2)} className="col-3 bg-success p-3">=</button>
            </div>
        </div>
    );
}