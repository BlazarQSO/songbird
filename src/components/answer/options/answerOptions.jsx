import React from 'react';
import './answerOptions.scss';
import { AnswerOptionsItem } from './answerOptionsItem';

class AnswerOptions extends React.Component {
    render() {
        return (
            <div className="answer__options">
                <AnswerOptionsItem name="Ворон"/>
                <AnswerOptionsItem name="Журавль"/>
                <AnswerOptionsItem name="Ласточка"/>
                <AnswerOptionsItem name="Козодой"/>
                <AnswerOptionsItem name="Кукушка"/>
                <AnswerOptionsItem name="Синица"/>
            </div>
        );
    }
}

export { AnswerOptions }
