import React from 'react';
import './score.scss';

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
    }

    render() {
        return (
            <div class="header__logo_score">
                <label>Score: </label>
                <span>{this.state.score}</span>
            </div>
        );
    }
}

export { Score }
