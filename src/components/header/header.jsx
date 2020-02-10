import React from 'react';
import './header.scss';
import { HeaderLogo } from './headerLogo';
import { HeaderSteps } from './headerSteps';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="header">
                <HeaderLogo />
                <HeaderSteps step={this.props.step}/>
            </header>
        );
    }
}

export { Header }
