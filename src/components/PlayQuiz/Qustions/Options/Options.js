import React, { useContext } from 'react';
import { Handle_answer_context } from '../../PlayQuiz';

const Options = ({ data, correctAnswer }) => {

    const handle_answer = useContext(Handle_answer_context);

    
    return (
        <div>
            <button onClick={()=>handle_answer(data, correctAnswer)} className='select_btn'>{data}</button>
        </div>
    );
};

export default Options;