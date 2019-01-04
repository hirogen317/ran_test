import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native'
import { Actions } from 'react-native-router-flux';

import styles from '../styles';

const Form = t.form.Form;


var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

const User = t.struct({
  gender: Gender,
  age: t.Integer,
  height: t.Integer,
  weight: t.Integer,
});

var options = {
  fields: {
    gender: {
      isCollapsed: false
    }
  }
};


export default class SurveyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:{gender: 'M'}}

    this.onChange = this.onChange.bind(this);
    this.onPressNext = this.onPressNext.bind(this);
  }
  onChange(value) {
    console.log(value)
    this.setState({ value: value});
  }
  onPressNext() {
    Actions.select()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Step 1: Input your personal information</Text>

        <Form type={User} options={options} value={this.state.value}
          onChange={this.onChange}/>
        <Button
          title="Next"
          onPress={this.onPressNext}
        />
      </View>
    );
  }
}
