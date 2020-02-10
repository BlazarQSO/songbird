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

    onChange(curName, searchName, getScore) {
        if (curName === searchName) {
            this.setState({correctly: "answer__options_item correctly"});
            getScore(true);
        } else {
            this.setState({correctly: "answer__options_item incorrectly"});
            getScore(false);
        }
    }

    render() {
        return (
            <div className={this.state.correctly}>
                <input type="radio"
                    onClick={() => {
                            this.props.getResult(this.props.elem);
                            this.onChange(this.props.elem.name, this.props.searchName, this.props.getScore);
                        }
                    }
                    className="answer__options_item_radio"
                    id={`radio_${this.props.elem.id}`}
                />
                <label for={`radio_${this.props.elem.id}`} className="answer__options_item_label"><span>{this.props.elem.name}</span></label>
            </div>
        );
    }
}

export { AnswerOptionsItem }
