import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Card, Container, Button, Icon} from 'native-base';
import styles from '../Data/style.js';

export default class AddTaskComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : ''
        };
    }

    render(){
        return (
            <View style={styles.addComponent}>
                <Card style={{flexDirection: 'row'}}>
                    <TextInput style={styles.addComponentInputText} 
                        value = {this.state.text}
                        onChangeText = {(text)=>this.setState({text})}
                    />
                    <Button success style={styles.addComponentButton} 
                        onPress = {()=>{
                            this.setState({text: ''});
                            this.props.addTask(this.state.text);
                        }}            
                    >
                        <Icon name='md-add' style={{alignItems: 'center'}} />
                    </Button>
                </Card>
            </View>
        );
    }
}