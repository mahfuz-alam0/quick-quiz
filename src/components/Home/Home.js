import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Quiz from './Quiz/Quiz';

const Home = () => {
    const { data } = useLoaderData();
    

    return (
        <div className='container mani_container'>
            <p className='up_text'>Take a quiz and check your skills</p>
            <div className='quiz_container'>
                {
                    data.map(quiz=> <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;