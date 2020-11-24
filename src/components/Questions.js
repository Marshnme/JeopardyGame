import React from 'react';
import './questions.css'


const Questions = (props) => {
    return(
        <div class="gameTile">
            <h2>Category</h2>
            <p>{props.question.category.title}</p>
            <h2>Qustion</h2>
            <p>{props.question.question}</p>
            {/* <p>Answer: {props.question.answer}</p> */}
            <p>Value: ${props.question.value}</p>
        </div>
    );
}

export default Questions;