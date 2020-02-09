import React from 'react';
import './main.scss';
import { Header } from './header/header';
import { Question } from './question/question';
import { Answer } from './answer/answer';
import { ButtonNext } from './partial/buttonNext';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Question />
                <Answer />
                <ButtonNext />
            </div>
        );
    }
}

export { Main }
