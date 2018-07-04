import React from 'react';

import './style.scss';

const Slide = props => {
    const {hero, text} = props.slide;

    return (
        <div className={props.isCurrent ? 'slide slide-current' : 'slide'}>
            <img className="slide-hero img-responsive" src={hero} alt="slide-hero"/>

            <div className="slide-caption">
                <h3 className="slide-caption__text">{text}</h3>
            </div>
        </div>
    );
};

export default Slide;
