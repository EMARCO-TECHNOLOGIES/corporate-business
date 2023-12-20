import React from 'react'

function Button(props) {
    const { style, text } = props
    return (
        <button className={style}>
            {text}
        </button>
    )
}

export default Button