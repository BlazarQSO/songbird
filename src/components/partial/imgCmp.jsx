import React from 'react';
import './imgCmp.scss';

class ImgCmp extends React.Component {
    render() {
        return (
            <figure className="question__image">
                <img src="https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg" className="question__image_src"  width="200" height="150" alt="" />
            </figure>
        );
    }
}

export { ImgCmp }
