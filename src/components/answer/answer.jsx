import React from 'react';
import './answer.scss';
import { AnswerResult } from './result/answerResult';
import { AnswerOptions } from './options/answerOptions';

class Answer extends React.Component {
    render() {
        return (
            <section className="answer">
                <AnswerOptions />
                <AnswerResult />
            </section>
        );
    }
}

export { Answer }
