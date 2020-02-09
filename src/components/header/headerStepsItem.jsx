import React from 'react';
import './headerStepsItem.scss';

class HeaderStepsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <span className="header__steps_item">{this.props.name}</span>
        );
    }
}

export { HeaderStepsItem };
