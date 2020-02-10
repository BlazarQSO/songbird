import React from 'react';
import './answerResult.scss';
import { ImgCmp } from '../../partial/imgCmp';
import { AudioCmp } from '../../partial/audioCmp';

class AnswerResult extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.result != false) {
            return (
                <div className="answer__result">
                    <div className="answer__result_info">
                        <ImgCmp img={this.props.result.image}/>
                        <figure className="answer__result_info_data">
                            <figcaption className="answer__result_info_data_title">{this.props.result.name}</figcaption>
                            <hr/>
                            <figcaption className="answer__result_info_data_type">{this.props.result.species}</figcaption>
                            <hr/>
                            <AudioCmp audio={this.props.result.audio}/>
                        </figure>
                    </div>
                    <div className="answer__result_description">
                        <span>{this.props.result.description}</span>
                    </div>
                </div>
            );
        }
        return (
            <div className="answer__result">
                <div className="answer__result_title">Послушайте плеер. Выберите птицу из списка</div>
            </div>
        );
    }
}

export { AnswerResult }
