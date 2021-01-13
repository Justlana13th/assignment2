import React from 'react'

const Char = (props) => {
    const style = {
        textAlign: "center",
        margin: '16px',
        border: "1px solid black",
        display: 'inline-block',
        padding: "16px"
    }

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default Char;