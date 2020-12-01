import React from 'react';

const Box = (props) => {
    
    return (
        <div className={`box ${props.state}`}  style={{backgroundColor:props.colour}}></div>
    )
}

export default Box;