import React from 'react';
import './imgCmp.scss';

class ImgCmp extends React.Component {
    render() {
        return (
            <figure className="question__image">
                <img src={this.props.img} className="question__image_src"  width="200" height="150" alt="" />
            </figure>
        );
    }
}

export { ImgCmp }
