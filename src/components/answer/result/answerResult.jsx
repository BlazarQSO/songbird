import React from 'react';
import './answerResult.scss';
import { ImgCmp } from '../../partial/imgCmp';
import { AudioCmp } from '../../partial/audioCmp';

class AnswerResult extends React.Component {
    render() {
        return (
            <div className="answer__result">
                <div className="answer__result_info">
                    <ImgCmp />
                    <figure className="answer__result_info_data">
                        <figcaption className="answer__result_info_data_title">Кукушка</figcaption>
                        <hr/>
                        <figcaption className="answer__result_info_data_type">Cuculus canorus</figcaption>
                        <hr/>
                        <AudioCmp />
                    </figure>
                </div>
                <div className="answer__result_description">
                    <span>Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.</span>
                </div>
            </div>
        );
    }
}

export { AnswerResult }
