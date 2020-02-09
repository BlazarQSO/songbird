import React from 'react';
import './audioCmp.scss';

class AudioCmp extends React.Component {
    render() {
        return (
            <audio controls class="question__hint_audio">
                <source src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3" />
            </audio>
        );
    }
}

export { AudioCmp }
