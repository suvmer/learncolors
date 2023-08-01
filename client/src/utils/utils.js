import {namedColors, engColors} from '../resources/colors';

const random = (arr) => arr[Math.floor((Math.random()*arr.length))];

export const generateTasks = (tasksCount, answersCount, isEng = false) => Array(tasksCount).fill().map(el => ({
        list: Array(answersCount).fill().map(ans => random(isEng ? engColors : namedColors)),
        correct: Math.floor((Math.random()*answersCount))
    }));

export const CountForm = (number, titles) => {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    const cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }
  return titles[1];
}