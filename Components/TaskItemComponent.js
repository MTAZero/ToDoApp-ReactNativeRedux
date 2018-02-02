import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CardItem, Icon, Button} from 'native-base';

export default class TaskItemComponent extends Component {        
    render(){
        var color = 'pink';
        if (this.props.Completed) color = 'lightgreen';
        return (
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.props.changeTask(this.props.Id)}>
                <CardItem style={{backgroundColor: color, margin: 5, width: 300}}>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>
                        {this.props.Name}
                    </Text>
                    <Button style={{position: 'absolute', right: 10, top: 3, width: 50, height: 35}} danger onPress={()=>this.props.delTask(this.props.Id)}>
                        <Icon name='md-backspace' style={{alignItems: 'center'}}/>
                    </Button>
                </CardItem>
                
            </TouchableOpacity>
        );
    }
}