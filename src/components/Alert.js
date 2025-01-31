import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + word.slice(1);

    }
    return (
        <div className='extra'>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <i className="fa-solid fa-circle-check bi flex-shrink-0 me-2 text-success fs-5"></i>
                <strong>{capitalize(props.alert.type)}: </strong> {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert