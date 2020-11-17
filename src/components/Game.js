import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Questions from './Questions'
import './game.css';

const Game = (props) => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://jservice.io/api/random";
        axios
            .get(proxyurl + url)
            .then(response => {
             setQuestions(response.data)   
            
            console.log("response data:", response.data);
        })
        .catch(error => {
            console.log("data was not returned", error);
        });
        }, []);

        console.log(questions)
    return(
        <div class="container">
            <header>
                Score:
            </header>
            <main>
                {questions.map(question =>
        
                     (<Questions question={question}/>
                     ))}
            </main>
        </div>
    );
}

export default Game;