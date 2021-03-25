import React from 'react';


function HomeSection(props) {
    return (
        <div className="H-section-container" >
            <h2 className="H-section" id="M-section-h">{props.heading}</h2>
            <p className="H-section" id="M-section-p">{props.text}</p>
            <button className="H-section" id="H-section-button"><a href={props.link}>{props.button}</a></button>
        </div>
    )
}

export default HomeSection;