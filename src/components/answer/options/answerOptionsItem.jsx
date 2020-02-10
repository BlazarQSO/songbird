import React from 'react';
import './answerOptionsItem.scss';

class AnswerOptionsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctly: "answer__options_item",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(curName, searchName, getScore, changeNextStep, resetFuncResult, showQuestion) {
        let score = false;
        if (this.state.correctly !== "answer__options_item") {
            score = true;
        }

        if (curName === searchName) {
            this.setState({correctly: "answer__options_item correctly"});
            getScore(true, score);
            changeNextStep(true);
            showQuestion(true);
        } else {
            this.setState({correctly: "answer__options_item incorrectly"});
            getScore(false, score);
        }
        resetFuncResult(true);
    }

    render() {
        return (
            <div className={this.state.correctly}>
                <input type="radio"
                    onClick={() => {
                            this.props.getResult(this.props.elem);
                            this.onChange(
                                this.props.elem.name,
                                this.props.searchName,
                                this.props.getScore,
                                this.props.changeNextStep,
                                this.props.resetFuncResult,
                                this.props.showQuestion
                            );
                        }
                    }
                    className="answer__options_item_radio"
                    id={`radio_${this.props.elem.id}`}
                />
                <label htmlFor={`radio_${this.props.elem.id}`} className="answer__options_item_label"><span>{this.props.elem.name}</span></label>
            </div>
        );
    }
}

export { AnswerOptionsItem }
