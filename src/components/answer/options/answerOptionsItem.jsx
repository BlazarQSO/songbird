import React from 'react';
import './answerOptionsItem.scss';

class AnswerOptionsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctly: "answer__options_item",
        }
        this.onChange = this.onChange.bind(this);
        this.resetCorrectly = this.resetCorrectly.bind(this);
    }

    onChange(curName, searchName, getScore, changeNextStep, resetFuncResult, showQuestion, resetCorrectly, resetRadio, resetFuncRadio) {
        if (resetRadio === false){
            return;
        }
        let score = false;
        if (this.state.correctly !== "answer__options_item") {
            score = true;
        }

        if (curName === searchName) {
            this.setState({correctly: "answer__options_item correctly"});
            changeNextStep(true);
            showQuestion(true);
            getScore(true, score);
            resetFuncRadio(false);
        } else {
            this.setState({correctly: "answer__options_item incorrectly"});
            getScore(false, score);
        }
        resetFuncResult(true);
    }

    resetCorrectly() {
        if (this.props.count === 5 && this.props.resetRadio) {
            this.setState({correctly: "answer__options_item"});
        }
        this.setState({correctly: "answer__options_item"});
    }

    change(resetFuncRadio){
        resetFuncRadio(false);
    }

    render() {

        let correctly = this.state.correctly;

        return (
            <div className={correctly}>
                <input type="radio"
                    onClick={() => {
                            this.props.getResult(this.props.elem);
                            //this.resetCorrectly();
                            this.onChange(
                                this.props.elem.name,
                                this.props.searchName,
                                this.props.getScore,
                                this.props.changeNextStep,
                                this.props.resetFuncResult,
                                this.props.showQuestion,
                                this.props.resetCorrectly,
                                this.props.resetRadio,
                                this.props.resetFuncRadio
                            );
                        }
                    }
                    // onChange={() => {
                    //     this.resetCorrectly();
                    // }}
                    className="answer__options_item_radio"
                    id={`radio_${this.props.elem.id}`}
                />
                <label htmlFor={`radio_${this.props.elem.id}`} className="answer__options_item_label"><span>{this.props.elem.name}</span></label>
            </div>
        );
    }
}

export { AnswerOptionsItem }
