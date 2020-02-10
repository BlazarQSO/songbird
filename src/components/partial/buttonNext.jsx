import React from 'react';
import './buttonNext.scss';

class ButtonNext extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.locked) {
            return (
                <div className="next">
                    <button className="next__btn" onClick={() => {
                        this.props.nextStep();
                        this.props.randBird();
                        this.props.changeNextStep(false);
                        this.props.resetFuncResult(false);
                        this.props.optionsBirds();
                        this.props.showQuestion(false);
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
