import {connect} from 'react-redux';
import TaskItemComponent from '../Components/TaskItemComponent.js';
import {changeTask, delTask} from '../Actions';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTask: (id) => {
            dispatch(changeTask(id))
        },
        delTask: (id) =>{
            dispatch(delTask(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent);