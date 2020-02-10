import React from 'react';
import './headerSteps.scss';
import { HeaderStepsItem } from './headerStepsItem';
import { steps } from '../../data/steps.js';

class HeaderSteps extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="header__steps">
                {
                    steps.map((elem, index) => {
                        if (this.props.step === index) {
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
