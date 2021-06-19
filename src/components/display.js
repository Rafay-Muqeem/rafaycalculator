import React from 'react';

export default function Display(props){
    
    return(
        <div className="display rounded-top p-3">
            <h2>{props.state}</h2>
        </div>
    );
}