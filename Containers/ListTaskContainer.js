import {connect} from 'react-redux';
import ListTaskComponent from '../Components/ListTaskComponent.js';

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        ListTask: state.TaskReduce
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTaskComponent);