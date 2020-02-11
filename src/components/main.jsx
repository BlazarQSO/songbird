import React from 'react';
import './main.scss';
import { Header } from './header/header';
import { Question } from './question/question';
import { Answer } from './answer/answer';
import { ButtonNext } from './partial/buttonNext';
import { EndGame } from './partial/endGame';
import birdsData from '../data/birds';
import img from '../images/win.gif';

class Main extends React.Component {
    constructor(props){
        super(props)
        const _randBird = randBirdInside();
        const _optionsBirds = getOptionsBirdsInside();
        const _length = _optionsBirds.length;
        const _options = new Array(_length).fill("answer__options_item");
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
            options: _options,
            length: _length,
            endGame: "game"
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
        this.resetRadio = this.resetRadio.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
        this.changeOptions = this.changeOptions.bind(this);
        this.checkGame = this.checkGame.bind(this);
        this.resetScore = this.resetScore.bind(this);
    }

    nextStep(decStep) {
        let value = this.state.step;
        value = (value + 1) % 6;
        if (decStep) value -= 1;
        this.setState({ step: value });
    }

    randBird(decStep) {
        let index = this.state.step + 1;
        if (index === 6) index = 0;
        if (decStep) index -= 1;
        const curStepBirds = birdsData[index];
        const rand = Math.floor(Math.random() * (curStepBirds.length));
        this.setState({randBird: curStepBirds[rand]});
    }

    getOptionsBirds(decStep) {
        let index = this.state.step + 1;
        if (index === 6) index = 0;
        if (decStep) index -= 1;
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

    resetOptions() {
        const options = new Array(this.state.length).fill("answer__options_item");
        this.setState({options: options});
    }

    changeOptions(value, index, right) {
        if (right) {
            var audio = new Audio();
            audio.src = "https://www.xeno-canto.org/sounds/uploaded/IIJAXHKSCC/XC387835-Tit-like%20Dacnis%20%28call%2Csong%29%2020161204%2CEsidePortachuelo%2CHuascaranNP%2CPERU.mp3";
            audio.autoplay = true;
            document.querySelector('audio').pause();
        } else {
            var audio = new Audio();
            audio.src = "https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC334238-aust-pelican-snp1.mp3";
            audio.autoplay = true;
        }
        const options = this.state.options;
        options[index] = value;
        this.setState({options: options});
    }

    checkGame() {
        if (this.state.step === this.state.length - 1) {
            if (this.state.score < 5 * this.state.length) {
                this.setState({endGame: "next", nextStep: true});
            } else {
                this.setState({endGame: "win"});
            }
        } else {
            this.setState({endGame: "game"});
        }
    }

    resetScore() {
        this.setState({score: 0})
    }

    render() {
        if (this.state.endGame === "game") {
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
                        count={this.state.count}
                        optionsRadio={this.state.options}
                        changeOptions={this.changeOptions}
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
                        resetOptions={this.resetOptions}
                        endGame={this.checkGame}
                    />

                </div>
            );
        } else if (this.state.endGame === "next") {
            return (
                <div className="endGame__wrap">
                    <EndGame
                        message={"Из 30 Вы Набрали:"}
                        score={this.state.score}
                        messageBelow={"Хотите повторить попытку?"}
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
                        resetOptions={this.resetOptions}
                        endGame={this.checkGame}
                        resetScore={this.resetScore}
                    />
                    <img src={img} alt=""/>
                </div>
            );
        } else {
            return (
                <div className="endGame__wrap">
                    <EndGame
                        message={"Вы набрали:"}
                        score={this.state.score}
                        messageBelow={"Поздравляю, Вы прошли игру!"}
                    />
                    <img src={img} alt=""/>
                    <img src={img} alt=""/>
                    <img src={img} alt=""/>
                </div>
            );
        }
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
