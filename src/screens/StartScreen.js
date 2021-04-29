import * as React from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import { 
    Button, 
    Divider, 
    Layout, 
    TopNavigation,
    BottomNavigation, 
    BottomNavigationTab, 
    Icon,
    Card,
    Text
} from '@ui-kitten/components';


import BottomNav from '../components/BottomNav'

const StartScreen  = () => {

    const navigation = useNavigation();


    return(
        <SafeAreaView style={styles.container}>
            <TopNavigation alignment='center'/>
            <Divider/>
            <Layout style={styles.layout}>
                <View>
                    <Button> LOGIN </Button>
                    <Button> SIGNUP </Button>
                </View>

            </Layout>
            <BottomNav />
        </SafeAreaView>
    )

}

export default StartScreen;


styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },

    layout:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    cardButton:{
        width: '20%'
    },

    cardFooter:{
        flexDirection: 'row'
    }
})