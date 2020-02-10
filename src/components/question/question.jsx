import React from 'react';
import './question.scss';
import { AudioCmp } from '../partial/audioCmp';
import { ImgCmp } from '../partial/imgCmp';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="question">
                <ImgCmp img={this.props.randBird.image}/>
                <figure className="question__hint">
                    <figcaption className="question__hint_title">{this.props.randBird.name}</figcaption>
                    <hr className="question__hint_line"/>
                    <AudioCmp audio={this.props.randBird.audio}/>
                </figure>
            </section>
        );
    }
}

export { Question }
