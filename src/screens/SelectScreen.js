import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native'
import {Actions} from 'react-native-router-flux';
import styles from '../styles';
import { CheckBox } from 'react-native-elements'


const questions = [
  {
    question: "How open do you want your project?",
    choices: [
      {
        choice: "I simply want to put my software out there",
        goto: 1
      },
      {
        choice: "I want to share, but others should share too",
        goto: 2
      }
    ]
  },
  {
    question: "What about the patents in your code?",
    choices: [
      {
        choice: "Anyone can use the patents in my code.",
        anwser: "Apache"
      },
      {
        choice: "I keep the rights to my patents in my code.",
        anwser: "MIT"
      }
    ]
  },
  {
    question: "Do you want to enable commercial adoption?",
    choices: [
      {
        choice: "Yes, my code can be used in closed source applications.",
        anwser: "LGPLv3"
      },
      {
        choice: "Sure, but others should share by opening their code too",
        anwser: "GPLv3"
      }
    ]
  }
]



export default class SelectScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log(props)
    this.checkPressed = this.checkPressed.bind(this)
    var i = 0
    if (props.q_index != undefined) {
      i = this.props.q_index;
    }
    this.state = {
      question: questions[i]['question'],
      choices: questions[i]['choices']
    }
  }
  checkPressed(choice) {
    if (choice['anwser']!= undefined) {
      Actions.result({anwser: choice.anwser})
    } else {
      Actions.select({q_index: choice.goto})
    }
  }
  renderQuestion() {
    var root = this;
    return (
      <View>
        <Text >{this.state.question}</Text>
        {this.state.choices.map(function(choice, index){
          return (<CheckBox key={index} title={choice.choice} onPress={() => root.checkPressed(choice)} />)
        })}
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View>

        {this.renderQuestion()}


        </View>
        
        <Button title="back" onPress={Actions.pop} />
      </View>
    )
  }
}
