import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Questions from './Questions'
import './game.css';

const Game = () => {
    // FIND WAY TO CALL API MULTPLE TIMES FOR MULTIPLE QUESIONS.

        // Make use effect call in question component and render the question.js multiple times 
            //call for categories instead of random and see if it returns all questions in catergory and use that insread of random
    
    //IDEAS
         
        //make entire game only one question at a time. In certain time limit get through as many as you can 
        // and see total point earned after. 
            //FUTRE PLANS
                //Leader board system for most points?
        const [questions, setQuestions] = useState([])
        const [score, setScore] = useState(0)
        const [userGuess, setUserGuess] = useState("")


        

    
            useEffect((questions) => {

                // Not using my own api so I couldnt enable cors and found a work around
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://jservice.io/api/random/";
        axios
            .get(proxyurl + url)
            // .then(response => {
            //  setQuestions(prevQues => ([...prevQues,...response.data]))   
            // return axios.get(proxyurl + url)
            // })
            // .then(response => {
            //     setQuestions(prevQues => ([...prevQues,...response.data]))   
            // return axios.get(proxyurl + url)
            // })
            .then(response => {
                setQuestions(prevQues => ([...prevQues,...response.data]))   
            
            })
            .catch(error =>{
                console.log("error",error)
            })
    
        }, []);

        const handleChange = (e) =>{
            e.preventDefault();
            setUserGuess([e.target.value]);
        };

        
        const handleSubmit = (e) =>{
            e.preventDefault();
        };

        const AnswerInput = (userAnswer,questionsInfo) => {
            if(userAnswer === questionsInfo.answer){
                CorrectAnswer(questionsInfo.value);
            }else{
                 WrongAnswer(questionsInfo.value)
            }
            
            }

        const CorrectAnswer = (value) => {
             setScore(score + value);
             const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://jservice.io/api/random/";
        axios
            .get(proxyurl + url)
            .then(response => {
             setQuestions(response.data)   
            
        })
        .catch(error => {
            console.log("data was not returned", error);
        });
        }

        const WrongAnswer = (value) => {
            setScore(score - value);
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
       const url = "https://jservice.io/api/random/";
       axios
           .get(proxyurl + url)
           .then(response => {
            setQuestions(response.data)   
           
       })
       .catch(error => {
           console.log("data was not returned", error);
       });
       }

        
        console.log("questions:",questions)
        console.log("userGuess:",userGuess)
    return(
        <div className="container">
            <header>
                <div className="scoreStyle">
                    Score: ${score}
                </div>
               
            </header>
            <main>
                {questions.map(question =>
        
                     (<Questions key={question.id}question={question}/>
                     ))}
                     <form onSubmit={handleSubmit}>
                        <label for="guess">Take a guess:</label>
                        <input type="text" name="guess" onChange={handleChange} value={userGuess}></input>
                        <button onClick = {() => AnswerInput(userGuess,questions[0])}>click me(correct)</button>
                     </form>
                     
            </main>
        </div>
    );
}

export default Game;