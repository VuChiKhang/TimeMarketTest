import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import { 
    Button, 
    Divider, 
    Layout, 
    TopNavigation,
    BottomNavigation, 
    BottomNavigationTab, 
    Icon
} from '@ui-kitten/components';


const BottomNav = (props) => {
    

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const navigation = useNavigation();


    const HomeIcon = (props) => (
        <Icon {...props} name='home-outline' />
    )

    const AuctionIcon = (props) => (
        <Icon {...props} name='shopping-bag-outline' />
    )

    const SearchIcon = (props) => (
        <Icon {...props} name='search-outline' />
    )

    const MenuIcon = (props) => (
        <Icon {...props} name='menu-outline' />
    )

    const CartIcon = (props) => (
        <Icon {...props} name='shopping-cart-outline' />
    )




    return(
        <BottomNavigation
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <BottomNavigationTab icon={HomeIcon} title='HOME'/>
                <BottomNavigationTab icon={AuctionIcon} title='AUCTION'/>
                <BottomNavigationTab icon={CartIcon} title='CART'/>
                <BottomNavigationTab icon={SearchIcon} title='SEARCH'/>
                <BottomNavigationTab icon={MenuIcon} title='MENU'/>
        </BottomNavigation>
    )
}

export default BottomNav

