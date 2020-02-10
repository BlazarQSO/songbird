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
        const _randBird = randBirdInside();
        const _optionsBirds = getOptionsBirdsInside();
        this.state = {
            step: 1,
            score: 10,
            randBird: _randBird,
            optionsBirds: _optionsBirds,
        }
        this.nextStep = this.nextStep.bind(this);
        this.randBird = this.randBird.bind(this);
        this.getOptionsBirds = this.getOptionsBirds.bind(this);
        this.changeScore = this.changeScore.bind(this);
    }

    nextStep() {
        let value = this.state.step;
        value = (value + 1) % 6;
        this.setState({ step: value });
    }

    randBird() {
        const index = this.state.step;
        const curStepBirds = birdsData[index];
        const rand = Math.floor(Math.random() * (curStepBirds.length));
        this.setState({randBird: curStepBirds[rand]});
    }

    getOptionsBirds() {
        const index = this.state.step;
        const curStepBirds = [...birdsData[index]];
        const randBirds = [];
        while (curStepBirds.length > 0) {
            const rand = Math.floor(Math.random() * (curStepBirds.length));
            randBirds.push(curStepBirds[rand]);
            curStepBirds.splice(rand, 1);
        }
        this.setState({optionsBirds: randBirds});
    }

    changeScore(value) {
        this.setState({score: this.state.score + value});
    }

    render() {
        //const randBird = this.randBird();
        //alert(this.state.randBird.name);
        return (
            <div className="main">
                <Header step={this.state.step} score={this.state.score}/>
                {/* <Question randBird={randBird}/> */}
                <Question randBird={this.state.randBird}/>
                <Answer
                    optionsBirds={this.state.optionsBirds}
                    getResult={this.getResult}
                    //searchName={randBird.name}
                    searchName={this.state.randBird.name}
                    changeScore={this.changeScore}
                />
                <ButtonNext nextStep={this.nextStep} randBird={this.randBird} optionsBirds={this.getOptionsBirds}/>
            </div>
        );
    }
}

function randBirdInside() {
    const curStepBirds = birdsData[0];
    const rand = Math.floor(Math.random() * (curStepBirds.length));
    return curStepBirds[rand];
}

function getOptionsBirdsInside() {
    const curStepBirds = [...birdsData[0]];
    const randBirds = [];
    while (curStepBirds.length > 0) {
        const rand = Math.floor(Math.random() * (curStepBirds.length));
        randBirds.push(curStepBirds[rand]);
        curStepBirds.splice(rand, 1);
    }
    return randBirds;
}

export { Main }
