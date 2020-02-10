import React from 'react';
import './answerOptions.scss';
import { AnswerOptionsItem } from './answerOptionsItem';

class AnswerOptions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 5
        }
        this.getScore = this.getScore.bind(this);
    }

    getScore(check) {
        if (check) {
            this.props.changeScore(this.state.score);
        } else {
            this.setState({score: this.state.score - 1});
            // alert(this.state.score);
        }
    }

    render() {
        return (
            <div className="answer__options">
                {this.props.options.map((elem, index) => {
                    return <AnswerOptionsItem
                        getResult={this.props.getResult}
                        searchName={this.props.searchName}
                        getScore={this.getScore}
                        elem={elem}
                        key={elem.id}
                    />
                })}
            </div>
        );
    }
}

export { AnswerOptions }
