import React from 'react';
import './audioCmp.scss';

class AudioCmp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <audio controls class="question__hint_audio" src={this.props.audio}>
                <source src={this.props.audio} />
            </audio>
        );
    }
}

export { AudioCmp }
