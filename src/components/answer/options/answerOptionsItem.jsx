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

    onChange(curName, searchName, getScore, changeNextStep, resetFuncResult, showQuestion,
            resetRadio, resetFuncRadio, optionsRadio, changeOptions, index) {

        if (resetRadio === false){
            return;
        }
        let score = false;
        if (optionsRadio !== "answer__options_item") {
            score = true;
        }

        if (curName === searchName) {
            changeOptions("answer__options_item correctly", index, true);
            changeNextStep(true);
            showQuestion(true);
            getScore(true, score);
            resetFuncRadio(false);
        } else {
            changeOptions("answer__options_item incorrectly", index, false);
            getScore(false, score);
        }
        resetFuncResult(true);
    }

    change(resetFuncRadio){
        resetFuncRadio(false);
    }

    render() {
        let correctly = this.props.optionsRadio;
        return (
            <div className={correctly}>
                <input type="radio"
                    onClick={() => {
                            this.props.getResult(this.props.elem);
                            this.onChange(
                                this.props.elem.name,
                                this.props.searchName,
                                this.props.getScore,
                                this.props.changeNextStep,
                                this.props.resetFuncResult,
                                this.props.showQuestion,
                                this.props.resetRadio,
                                this.props.resetFuncRadio,
                                this.props.optionsRadio,
                                this.props.changeOptions,
                                this.props.index
                            );
                        }
                    }
                    className="answer__options_item_radio"
                    id={`radio_${this.props.elem.id}`}
                />
                <label htmlFor={`radio_${this.props.elem.id}`} className="answer__options_item_label">
                    <span>{this.props.elem.name}</span>
                </label>
            </div>
        );
    }
}

export { AnswerOptionsItem }
