import React from 'react';
import './buttonNext.scss';

class ButtonNext extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.locked) {
            let decStep = false;
            if (this.props.resetScore !== undefined) {
                decStep = true;
            }
            return (
                <div className="next">
                    <button className="next__btn" onClick={() => {
                        this.props.nextStep(decStep);
                        this.props.randBird(decStep);
                        this.props.changeNextStep(false);
                        this.props.resetFuncResult(false);
                        this.props.optionsBirds(decStep);
                        this.props.showQuestion(false);
                        this.props.resetCount();
                        this.props.resetRadio(true);
                        this.props.resetOptions();
                        this.props.endGame();
                        if (this.props.resetScore !== undefined) {
                            this.props.resetScore();
                        }
                    }}>
                        Next Level
                    </button>
                </div>
            );
        } else {
            return (
                <div className="next">
                    <button disabled className="next__btn_grey">
                        Next Level
                    </button>
                </div>
            );
        }
    }
}

export { ButtonNext }
