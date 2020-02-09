import React from 'react';
import './answerOptionsItem.scss';

class AnswerOptionsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="answer__options_item">
                <input type="radio" class="answer__options_item_radio" id="radio_1" />
                <label for="radio_1" class="answer__options_item_label"><span>{this.props.name}</span></label>
            </div>
        );
    }
}

export { AnswerOptionsItem }
