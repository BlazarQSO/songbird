import React from 'react';
import './answer.scss';
import { AnswerResult } from './result/answerResult';
import { AnswerOptions } from './options/answerOptions';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: false
        }
        this.getResult = this.getResult.bind(this);
    }
    getResult(value) {
        this.setState({
            result: value
        })
    }
    render() {
        return (
            <section className="answer">
                <AnswerOptions
                    options={this.props.optionsBirds}
                    getResult={this.getResult}
                    searchName={this.props.searchName}
                    changeScore={this.props.changeScore}
                />
                <AnswerResult result={this.state.result}/>
            </section>
        );
    }
}

export { Answer }
