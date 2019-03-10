import axios from 'axios';
import { LOAD_QUIZ } from './types';


export function loadQuiz(type, size) {
    function getQuiz(type, size) {
        return axios.get('http://localhost:9000/api/quiz/list');
    }
    // thunk
    return function (dispatch) {
        dispatch({ type: 'QUIZ_REQUEST_BEGIN', message: 'Loading quiz..' })
        getQuiz(type, size)
            .then(response => response.data.Response)
            .then(quiz => {
                console.log('****', quiz);
                dispatch({ 
                    type: LOAD_QUIZ, 
                    quiz 
                });
            })
            .catch(error => {
                dispatch({ type: 'QUIZ_REQUEST_ERROR', message: 'Error while loading quiz' })
            })
    }

}