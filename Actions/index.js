import {AddTask, DelTask, Change} from './ActionTypes.js';

export const addTask = (Name) => {
    return {
        type: AddTask,
        Name: Name,
        Compeleted: false 
    };
};

export const delTask = (id) => {
    return {
        type : DelTask,
        Id: id
    };
};

export const changeTask = (id, completed) => {
    return {
        type: Change,
        Id: id,
        Compeleted: !completed
    };
};