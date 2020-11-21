import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Questions from './Questions'
import './game.css';

const Game = (props) => {
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState([])
    // FIND WAY TO CALL API MULTPLE TIMES FOR MULTIPLE QUESIONS.

        // Make use effect call in question component and render the question.js multiple times 
        //call for categories instead of random and see if it returns all questions in catergory and use that insread of random
    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://jservice.io/api/random/";
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

        const CorrectQuestion = () => {
            // if input == response.answer
            // setScore(...score,response.value)
            // add all values in score array and return score to update 
        }

        console.log(questions)
    return(
        <div class="container">
            <header>
                Score:{score}
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