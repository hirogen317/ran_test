import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native'
import {Actions} from 'react-native-router-flux';
import styles from '../styles';

export default class ResultScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You should choose: {this.props.anwser}</Text>
        <Button title="Back"
        onPress={Actions.pop} />
      </View>
    )
  }
}
