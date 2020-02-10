import React from 'react';
import './headerSteps.scss';
import { HeaderStepsItem } from './headerStepsItem';
import { steps } from '../../data/steps.js';

class HeaderSteps extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            step: 3
        }
    }

    render () {
        return (
            <div className="header__steps">
                {
                    steps.map((elem, index) => {
                        if (this.state.step === index + 1) {
                            return <HeaderStepsItem name={elem.name} selected={true} key={elem.id} />
                        }
                        return <HeaderStepsItem name={elem.name} selected={false} key={elem.id} />
                    })
                }
            </div>
        );
    }
}

export { HeaderSteps };
