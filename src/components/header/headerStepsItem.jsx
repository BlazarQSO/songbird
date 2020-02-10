import React from 'react';
import './headerStepsItem.scss';

class HeaderStepsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        if (this.props.selected) {
            return (
                <span className="header__steps_item header__steps_item_selected">{this.props.name}</span>
            );
        } else {
            return (
                <span className="header__steps_item">{this.props.name}</span>
            );
        }
    }
}

export { HeaderStepsItem };
