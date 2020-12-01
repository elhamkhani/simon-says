import React from 'react';

const Box = (props) => {
    
    return (
        <div className={`box ${props.state}`}  style={{backgroundColor:props.colour}} onClick={()=>{props.onClick(props.num)}}></div>
    )
}

export default Box;