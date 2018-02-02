/**
 * ToDoApp use Redux and Native Base
 * https://github.com/facebook/react-native
 * Coder: MTAZero - Bui Xuan Thuy
 */

import {AddTask, DelTask, Change} from '../Actions/ActionTypes.js';
import Tasks from '../Data/ListTask.js';

const TaskReducer = (listTask = Tasks, action) => {
    console.log(listTask);
    switch (action.type) {
        case AddTask:    
            return [...listTask,{
                Id: (listTask.length > 0) ? listTask[listTask.length-1].Id + 1 : 0,
                Name: action.Name,
                Completed: false
            }];

        
        case DelTask:
            var ans = [];
            for(var i=0; i<listTask.length; i++)
                if (listTask[i].Id != action.Id)
                    ans = [...ans, listTask[i]];
            return ans;


        case Change: 
            var ans = [];
            for(var i=0; i<listTask.length; i++){
                if (listTask[i].Id != action.Id){
                    ans = [...ans, listTask[i]];
                    continue;
                }
                ans = [...ans, {
                    Id: listTask[i].Id,
                    Name: listTask[i].Name,
                    Completed: !listTask[i].Completed
                }];
            }
            return ans;

    
        default:
            return listTask;
            break;
    }
};

export default TaskReducer;