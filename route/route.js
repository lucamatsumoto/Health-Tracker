import React from 'react';
import { StackNavigator } from 'react-navigation';
import Breakfast from '../info/breakfast';
import Lunch from '../info/lunch';
import Dinner from '../info/dinner';
import BMI from '../bmi'
import Home from '../homepage/homepage'

export default Info = StackNavigator({
    Home: {
        screen: Home,
    },
    BMI: {
        screen: BMI,
    },
    Breakfast: {
        screen: Breakfast,
    },
    Lunch: {
        screen: Lunch,
    },
    Dinner: {
        screen: Dinner,
    },
},  {
    headerMode: 'none',
    }
);

