import React from 'react';
import './headerSteps.scss';
import { HeaderStepsItem } from './headerStepsItem';

class HeaderSteps extends React.Component {
    render () {
        return (
            <div className="header__steps">
                <HeaderStepsItem name="Разминка" />
                <HeaderStepsItem name="Воробьиные" />
                <HeaderStepsItem name="Лесные птицы" />
                <HeaderStepsItem name="Певчие птицы" />
                <HeaderStepsItem name="Хищные птицы" />
                <HeaderStepsItem name="Морские птицы" />
            </div>
        );
    }
}

export { HeaderSteps };
