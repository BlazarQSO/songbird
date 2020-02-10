import React from 'react';
import './buttonNext.scss';

class ButtonNext extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="next">
                <button class="next__btn" onClick={() => this.props.nextStep()}>Next Level</button>
            </div>
        );
    }
}

export { ButtonNext }
