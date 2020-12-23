import React from 'react';
import './questions.css'


const Questions = (props) => {
    return(
        <div className="gameTile">
            <h3 className="tileTitles">Category</h3>
            <p>{props.question.category.title}</p>
            <h3 className="tileTitles">Question</h3>
            <p>{props.question.question}</p>
            {/* <p>Answer: {props.question.answer}</p> */}
            <p>Value: ${props.question.value}</p>
        </div>
    );
}

export default Questions;