import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = { hfeet: 0, hinches: 0, weight: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Calculate BMI
        </Text>

        <Text style={styles.body}>
          Height
        </Text>

        <View style={{flexDirection:'row'}}>
          <View>
            <TextInput
              keyboardType='numeric'
              onChangeText={(val) => this.setState({hfeet: val})}
              style={styles.hInput}
              placeholder="ft"
            />
          </View>
          <View style={{width: 10}}></View>
          <View>
            <TextInput
              keyboardType='numeric'
              onChangeText={(val) => this.setState({hinches: val})}
              style={styles.hInput}
              placeholder="in"
            />
          </View>
        </View>

        <Text style={styles.body}>
          Weight
        </Text>
        
        <TextInput
          keyboardType='numeric'
          onChangeText={(val) => this.setState({weight: val})}
          style={styles.wInput}
          placeholder="lb"
        />
        <View style={{flexDirection:'row'}}>
        <Button 
                onPress = {() => this.props.navigation.dispatch(NavigationActions.back())}
                style={styles.button} 
                title="Back"
        />
        <Button
          onPress = {() => this.props.navigation.navigate('Breakfast', {form: 'breakfast'})}
          title="Enter"
        />
        </View>
      </View>
    );
    console.log({height})
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    padding: '10%'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  hInput: {
    height: 50,
    marginBottom: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    width: 145
  },
  wInput: {
    height: 50,
    marginBottom: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    width: 300
  },
  body: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 45
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});
