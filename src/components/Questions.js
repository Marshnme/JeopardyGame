import React, {useState,useEffect} from 'react';



const Questions = (props) => {
    return(
        <div class="gameTile">
            <p>{props.question.id}</p>
        </div>
    );
}

export default Questions;