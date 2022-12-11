import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PlayQuiz.css';
import Questions from './Qustions/Questions';

export const Handle_answer_context = React.createContext(0);


const PlayQuiz = () => {
    const [right, set_right] = useState(0);
    const [wrong, set_wrong] = useState(0);

    const { data, } = useLoaderData()
    const { logo, name, total, questions } = data;

    const notify_currect = () => {
        toast.success('Currect Answer');
    };
    const notify_wrong = () => {
        toast.error('wrong Answer')
    }
    const notify_answer = (correctAnswer) => {
        toast.info('Right Answer is '+ correctAnswer);
    }

    const handle_answer = (data, correctAnswer) => {
        if (data === correctAnswer) {
            set_right(right + 1);
            notify_currect();

        } else {
            set_wrong(wrong + 1);
            notify_wrong();
        }
    }


    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <Handle_answer_context.Provider value={handle_answer}>
            <div>
                <div className='about_quiz'>
                    <img src={logo} alt="" />
                    <div className='text_info_container'>
                        <div className='text_info'>
                            <h4>Topic: {name}</h4>
                            <p>Total: {total}</p>
                        </div>
                    </div>
                </div>
                <div className='mark_container'>
                    <p>Right Answer: {right}</p>
                    <p>Wrong Answer: {wrong}</p>
                </div>
                <div className='question_container container'>
                    {
                        questions.map(data => <Questions notify_answer={notify_answer} key={data.id} data={data}></Questions>)
                    }
                </div>
            </div>
            <ToastContainer position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </Handle_answer_context.Provider>
    );
};

export default PlayQuiz;