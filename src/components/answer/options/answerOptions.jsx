import React from 'react';
import './answerOptions.scss';
import { AnswerOptionsItem } from './answerOptionsItem';

class AnswerOptions extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="answer__options">
                {this.props.options.map((elem, index) => {
                    return <AnswerOptionsItem
                        getResult={this.props.getResult}
                        elem={elem}
                        key={elem.id}
                    />
                })}
            </div>
        );
    }
}

export { AnswerOptions }
