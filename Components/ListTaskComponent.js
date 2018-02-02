import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, List, ListItem, Content, CardItem} from 'native-base';
import TaskItemContainer from '../Containers/TaskItemContainer.js';

export default class ListTaskComponent extends Component {
    render(){
        return (
            <View style={{marginLeft: 30, height: 500, width: 350}}>
                <Content>
                <List
                    dataArray = {this.props.ListTask}
                    renderRow = {(item) => {
                        return (
                            <TaskItemContainer Name={item.Name} Id={item.Id} Completed={item.Completed} />
                        );
                    }}
                />
                </Content>
            </View>
        );
    }
}