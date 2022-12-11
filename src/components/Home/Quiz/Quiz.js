import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    const { logo, name, total, id } = quiz;

    return (
        <div className='quiz'>
            <div className='single_quiz'>
                <img src={logo} alt="" />
                <div className='info_container'>
                    <div className='quiz_info'>
                        <h3>{name}</h3>
                        <p>Total: {total}</p>
                    </div>
                    <Link to={`/quiz/${id}`}>
                        <button className='btn_quiz'>
                            Start Quiz
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;