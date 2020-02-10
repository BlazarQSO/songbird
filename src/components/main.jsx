import React from 'react';
import './main.scss';
import { Header } from './header/header';
import { Question } from './question/question';
import { Answer } from './answer/answer';
import { ButtonNext } from './partial/buttonNext';
import birdsData from '../data/birds';

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            step: 1
        }
        this.nextStep = this.nextStep.bind(this);
        this.randBird = this.randBird.bind(this);
    }

    nextStep() {
        let value = this.state.step;
        value = (value % 6) + 1;
        this.setState({ step: value });
    }

    randBird() {
        const index = this.state.step - 1;
        const curStepBirds = birdsData[index];
        const rand = Math.floor(Math.random() * (curStepBirds.length));
        return curStepBirds[rand];
    }

    render() {
        return (
            <div className="main">
                <Header step={this.state.step}/>
                <Question randBird={this.randBird()}/>
                <Answer />
                <ButtonNext nextStep={this.nextStep}/>
            </div>
        );
    }
}

export { Main }
