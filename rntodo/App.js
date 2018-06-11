import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class StaringWork extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, backgroundColor: 'steelblue'}}>
          <Text>Starting Work</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
