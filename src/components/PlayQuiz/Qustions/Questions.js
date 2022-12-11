import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from './Options/Options';
import './Questions.css';

const Questions = ({ data, notify_answer}) => {
    const { options, question, correctAnswer } = data;

    return (
        <div className='m_qus_container container'>
            <div className='qus_icon'>
                <p className='qustions'>{question}</p>
                <div onClick={() => notify_answer(correctAnswer)} className='ans_icon'>
                    <FontAwesomeIcon  icon={faEye}></FontAwesomeIcon>
                </div>
            </div>
            <div className='answer_container container'>
                {
                    options.map((data, index) => <Options key={index} data={data} correctAnswer={correctAnswer}></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;