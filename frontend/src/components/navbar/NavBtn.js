import React from 'react'

const MenuBtn = (props) => {
    return (
        <div>
            <button
            className='menu-button'
            onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
};

export default MenuBtn