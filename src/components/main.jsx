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
            step: 0,
            score: 0,
            randBird: _randBird,
            optionsBirds: _optionsBirds,
            nextStep: false,
            resetResult: false,
            right: false,
            count: 5,
            resetRadio: true,
            correctly: "answer__options_item"
        }
        this.nextStep = this.nextStep.bind(this);
        this.randBird = this.randBird.bind(this);
        this.getOptionsBirds = this.getOptionsBirds.bind(this);
        this.changeScore = this.changeScore.bind(this);
        this.changeNextStep = this.changeNextStep.bind(this);
        this.resetResult = this.resetResult.bind(this);
        this.showQuestion = this.showQuestion.bind(this);
        this.getScore = this.getScore.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.resetCorrectly = this.resetCorrectly.bind(this);
        this.resetRadio = this.resetRadio.bind(this);
    }

    nextStep() {
        let value = this.state.step;
        value = (value + 1) % 6;
        this.setState({ step: value });
    }

    randBird() {
        let index = this.state.step + 1;
        if (index === 6) index = 0;
        const curStepBirds = birdsData[index];
        const rand = Math.floor(Math.random() * (curStepBirds.length));
        this.setState({randBird: curStepBirds[rand]});
    }

    getOptionsBirds() {
        let index = this.state.step + 1;
        if (index === 6) index = 0;
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

    changeNextStep(value) {
        this.setState({nextStep: value});
    }

    resetResult(value) {
        this.setState({resetResult: value});
    }

    showQuestion(value) {
        this.setState({right: value});
    }

    getScore(check, score) {
        if (score) {
            return;
        }

        if (check) {
            this.changeScore(this.state.count);
        } else {
            let count = this.state.count;
            if (count > 0) {
                count -= 1;
            }
            this.setState({count: count});
        }
    }

    resetCount() {
        this.setState({count: 5});
    }

    resetRadio(value) {
        this.setState({resetRadio: value});
    }

    resetCorrectly(){
        this.setState({correctly: "answer__options_item"});
    }

    render() {
        return (
            <div className="main">
                <Header step={this.state.step} score={this.state.score}/>
                <Question
                    randBird={this.state.randBird}
                    right={this.state.right}
                />
                <Answer
                    optionsBirds={this.state.optionsBirds}
                    resetResult={this.state.resetResult}
                    resetFuncResult={this.resetResult}
                    searchName={this.state.randBird.name}
                    changeNextStep={this.changeNextStep}
                    showQuestion={this.showQuestion}
                    getScore={this.getScore}
                    resetRadio={this.state.resetRadio}
                    resetFuncRadio={this.resetRadio}
                    resetCorrectly={this.resetCorrectly}
                    correctly={this.state.correctly}
                    count={this.state.count}
                />
                <ButtonNext
                    nextStep={this.nextStep}
                    randBird={this.randBird}
                    optionsBirds={this.getOptionsBirds}
                    locked={this.state.nextStep}
                    changeNextStep={this.changeNextStep}
                    resetFuncResult={this.resetResult}
                    showQuestion={this.showQuestion}
                    resetCount={this.resetCount}
                    resetRadio={this.resetRadio}
                />
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
