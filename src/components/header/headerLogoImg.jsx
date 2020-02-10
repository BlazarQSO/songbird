import React from 'react';
import './headerLogoImg.scss';
import img from '../../images/logo.svg';

class HeaderLogoImg extends React.Component {
    render() {
        return (
            <figure className="header__logo_img">
                <img src={img} width="200" height="70" alt="img" />
            </figure>
        );
    }
}

export { HeaderLogoImg }
