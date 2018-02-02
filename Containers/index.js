import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AddTaskContainer from './AddTaskContainer.js';
import ListTaskContainer from './ListTaskContainer.js';

export default class MainComponent extends Component{
    render(){
        return (
            <View>
                <AddTaskContainer />
                <ListTaskContainer />
            </View>
        );
    }
}
