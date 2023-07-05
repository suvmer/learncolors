import {namedColors} from '../resources/colors';

const random = (arr) => arr[Math.floor((Math.random()*arr.length))];

const generateTasks = (tasksCount, answersCount) => Array(tasksCount).fill().map(el => ({
        list: Array(answersCount).fill().map(ans => random(namedColors)),
        correct: Math.floor((Math.random()*answersCount))
    }))
export {generateTasks};