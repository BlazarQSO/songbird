import React from 'react';
import './answerOptions.scss';
import { AnswerOptionsItem } from './answerOptionsItem';

class AnswerOptions extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     score: 5
        // }
        // this.getScore = this.getScore.bind(this);
    }

    // getScore(check, score) {
    //     if (score) {
    //         return;
    //     }

    //     if (check) {
    //         //this.props.changeScore(this.state.score);
    //     } else {
    //         this.setState({score: this.state.score - 1});
    //     }
    // }

    render() {
        return (
            <div className="answer__options">
                {this.props.options.map((elem, index) => {
                    return <AnswerOptionsItem
                        getResult={this.props.getResult}
                        searchName={this.props.searchName}
                        getScore={this.props.getScore}
                        changeNextStep={this.props.changeNextStep}
                        resetFuncResult={this.props.resetFuncResult}
                        showQuestion={this.props.showQuestion}
                        resetRadio={this.props.resetRadio}
                        resetFuncRadio={this.props.resetFuncRadio}
                        count={this.props.count}
                        optionsRadio={this.props.optionsRadio[index]}
                        changeOptions={this.props.changeOptions}
                        index={index}
                        elem={elem}
                        key={elem.id}
                    />
                })}
            </div>
        );
    }
}

export { AnswerOptions }
