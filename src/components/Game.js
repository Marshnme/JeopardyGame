import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './game.css';

const Game = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://jservice.io/Random";
        axios
            .get(proxyurl + url)
            .then(response => {
             setQuestions("dog")   
            
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
                <div>
                   <h3>questions</h3> 
                </div>
            </main>
        </div>
    );
}

export default Game;