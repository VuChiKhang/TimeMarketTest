import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import HomeScreen from './HomeScreen'
import SearchScreen from './SearchScreen'
import AuctionScreen from './AuctionScreen'
import CartScreen from './CartScreen'
import MenuScreen from './MenuScreen'
import BottomNav from '../components/BottomNav'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {



    return(
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName="Home">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Auction" component={AuctionScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
            </Stack.Navigator>
            {/* <Tab.Navigator tabBar={BottomNav} >
                <Tab.Screen name='HomeBot' component={HomeScreen} />
                <Tab.Screen name='AuctionBot' component={AuctionScreen} />
                <Tab.Screen name='CartBot' component={CartScreen} />
                <Tab.Screen name='SearchBot' component={SearchScreen} />
                <Tab.Screen name='MenuBot' component={MenuScreen} />
            </Tab.Navigator> */}
        </NavigationContainer>
    )


}

export default Navigator;