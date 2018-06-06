import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TextInput } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}! You are  {this.props.number}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
         <Greeting name='Abdullah' number='1'></Greeting>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <Blink text='Hello, again and again'/>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
         <PizzaTranslator></PizzaTranslator>
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  backgroundbox: {
    backgroundColor: 'steelblue'
  }
});
