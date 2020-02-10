import React from 'react';
import './headerLogo.scss';
import { HeaderLogoImg } from './headerLogoImg';
import { Score } from './score';

class HeaderLogo extends React.Component {
    render() {
        return (
            <div className="header__logo">
                <HeaderLogoImg />
                <Score  score={this.props.score}/>
            </div>
        );
    }
}

export { HeaderLogo }
