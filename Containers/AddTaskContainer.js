import AddTaskComponent from '../Components/AddTaskComponent.js';
import {connect} from 'react-redux';
import { addTask } from '../Actions';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (name) => {
            dispatch(addTask(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent);
