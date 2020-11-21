import React, {useState,useEffect} from 'react';



const Questions = (props) => {
    return(
        <div class="gameTile">
            <p>Category: {props.question.category.title}</p>
            <p>Question: {props.question.question}</p>
            {/* <p>Answer: {props.question.answer}</p> */}
            <p>Value: {props.question.value}</p>
        </div>
    );
}

export default Questions;