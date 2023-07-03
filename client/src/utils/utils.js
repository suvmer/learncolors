import {namedColors} from '../resources/colors';

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const generateTasks = (tasksCount, answersCount) => Array(tasksCount).fill().map(el => ({
        list: Array(answersCount).fill().map(ans => namedColors.random()),
        correct: Math.floor((Math.random()*answersCount))
    }))
export {generateTasks};