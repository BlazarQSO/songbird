import React from 'react';
import './question.scss';
import { AudioCmp } from '../partial/audioCmp';
import { ImgCmp } from '../partial/imgCmp';

class Question extends React.Component {
    render() {
        return (
            <section className="question">
                <ImgCmp />
                <figure className="question__hint">
                    <figcaption className="question__hint_title">Кукушка</figcaption>
                    <hr className="question__hint_line"/>
                    <AudioCmp />
                </figure>
            </section>
        );
    }
}

export { Question }
