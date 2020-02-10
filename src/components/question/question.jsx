import React from 'react';
import './question.scss';
import { AudioCmp } from '../partial/audioCmp';
import { ImgCmp } from '../partial/imgCmp';
import emptyImg from '../../images/bird.jpg';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (true){//this.props.right) {
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
        } else {
            return (
                <section className="question">
                    <ImgCmp img={emptyImg}/>
                    <figure className="question__hint">
                        <figcaption className="question__hint_title">*****</figcaption>
                        <hr className="question__hint_line"/>
                        <AudioCmp audio={this.props.randBird.audio}/>
                    </figure>
                </section>
            );
        }
    }
}

export { Question }
