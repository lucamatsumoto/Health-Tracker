import React, { Component } from 'react';
import { Button, TextInput, Text, TouchableHighlight , View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class Dinner extends Component {

    constructor(){
        super();

        this.info = {
           DiningHall: "",
           Item1: "",
           Item2: "",
           Item3: "",
           Item4: "",
           Item5: "",
        }
    }    
    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.title}>
                Dinner
            </Text>
            <TextInput
                onChangeText={(val) => this.setState({DiningHall: val})}
                style={styles.input}
                placeholder="Enter Dining Hall"
            />
            <TextInput
                onChangeText={(val) => this.setState({Item1: val})}
                style={styles.input}
                placeholder="Item 1"
            />
            <TextInput
            onChangeText={(val) => this.setState({Item2: val})}
                style={styles.input}
                placeholder="Item 2"
            />
            <TextInput
                onChangeText={(val) => this.setState({Item3: val})}
                style={styles.input}
                placeholder="Item 3"
            />
            <TextInput  
                onChangeText={(val) => this.setState({Item4: val})}
                style={styles.input}
                placeholder="Item 4"
            />
            <TextInput
                onChangeText={(val) => this.setState({Item5: val})}
                style={styles.input}
                placeholder="Item 5"
            />
            <Button 
                onPress = {() => this.props.navigation.dispatch(NavigationActions.back())}
                style={styles.button} 
                title="Back"
            />
            <Text style={styles.note}>
                *Check UCLA dining site for official names of items
            </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        padding: '10%'
    },
    note: {
        color: 'black',
        fontSize: 10,
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
    input: {
      height: 50,
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48bbec',
      width: 300
    },
    button: {
      height: 50,
      backgroundColor: '#48BBEC',
      alignSelf: 'stretch',
      marginTop: 10,
      justifyContent: 'center'
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