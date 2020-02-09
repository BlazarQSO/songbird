import React from 'react';
import './header.scss';
import { HeaderLogo } from './headerLogo';
import { HeaderSteps } from './headerSteps';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <HeaderLogo />
                <HeaderSteps />
            </header>
        );
    }
}

export { Header }
