
import React, { Component } from 'react';
import { Image, Content, Button, TextInput, Text, TouchableHighlight , View, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation'


export default class Home extends Component {
 
  render() {
    return(
    
    <View style={styles.container}>
      <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}>
      <Image
        source={require('./food.jpg')}
        style={styles.backgroundImage}
      />
      </View>
      <Text style={styles.title}>
          Health Tracker
      </Text>
      <Button
       onPress = {() => this.props.navigation.navigate('BMI', {form: 'bmi'})}
       title="Get Started"
       //style={styles.button}
        //accessibilityLabel="Learn more about this Simple Button"
      /> 
    
    </View>
    );
  }



}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        //fontFamily: 'sans-serif',
        fontSize: 45,
        fontWeight: 'bold',
        padding: '10%',
        paddingTop: 0
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      //justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10,
      paddingTop: 0
    },
  
    wrapper: {
      top: 10,
      backgroundColor: 'transparent',
    },

    backgroundImage: {
      width: 600,
      height: 1000,
      resizeMode: 'cover',
    }
  });

  