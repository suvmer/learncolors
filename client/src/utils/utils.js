import {namedColors} from '../resources/colors';

const generateTasks = (tasksCount, answersCount) => {
    const tasks = [];
    for(let i = 0; i < tasksCount; i++) {
      const answ = [];
      for(var j = 0; j < answersCount; j++)
        answ.push(namedColors.random());
      tasks.push({
        list: answ,
        correct: Math.floor((Math.random()*answ.length))
      });
    }
    return tasks;
  }
export {generateTasks};