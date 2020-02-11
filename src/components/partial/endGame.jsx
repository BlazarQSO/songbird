import React from 'react';
import './endGame.scss';

class EndGame extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="endGame__wrap_message">
                <div>{this.props.message} {this.props.score} очков</div>
                <div>{this.props.messageBelow}</div>
            </div>
        );
    }
}

export { EndGame }
