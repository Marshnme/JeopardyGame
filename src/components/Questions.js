import React from 'react';
import './questions.css'


const Questions = (props) => {
    console.log("questions props",props)
    return(
        <div className="gameTile">
            <div className="questionInfo">
                <h3 className="tileTitles">Category</h3>
                <p>{props.question.category.title}</p>
                <h3 className="tileTitles">Question</h3>
                <p>{props.question.question}</p>
                {/* <p>Answer: {props.question.answer}</p> */}
                <p>Value: ${props.question.value}</p>
            </div>
        </div>
    );
}

export default Questions;