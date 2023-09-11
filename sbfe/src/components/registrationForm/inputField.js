import React from 'react';

const inputField = (name, id, type) => {
    return (
        <div style={{
            display: 'grid'
        }}>
            <label for={id}>{name}</label>
            <input type={type} name={name} id={id} />
        </div>)
}

export default inputField;