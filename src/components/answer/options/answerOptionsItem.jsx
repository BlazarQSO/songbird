import React from 'react';
import './answerOptionsItem.scss';

class AnswerOptionsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="answer__options_item">
                <input type="radio"
                    onClick={() => this.props.getResult(this.props.elem)}
                    class="answer__options_item_radio"
                    id={`radio_${this.props.elem.id}`}
                />
                <label for={`radio_${this.props.elem.id}`} class="answer__options_item_label"><span>{this.props.elem.name}</span></label>
            </div>
        );
    }
}

export { AnswerOptionsItem }
