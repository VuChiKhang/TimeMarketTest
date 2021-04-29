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

const HomeScreen  = () => {

    const navigation = useNavigation();

    const cardHeader = (props) => (
        <View {...props} >
            <Image source={require('../image/10x9-thick-armaflex-class-o-armacell-nitrile-insualtion-tube-500x500.jpg')} />
        </View>
    )

    const cardFooter = (props) => (
        <View {...props} styles={styles.cardFooter} >
            {/* <Icon name="shopping-cart-outline" /> */}
            <View styles={styles.cardButton} >
            <Button ></Button>
            </View>
            <View styles={styles.cardButton} >
            <Button></Button>
            </View>
        </View>
      );

    return(
        <SafeAreaView style={styles.container}>
            <TopNavigation title='HOME' alignment='center'/>
            <Divider/>
            <Layout style={styles.layout}>
                <Button onPress={() => navigation.navigate('SignUp')}>OPEN DETAILS</Button>
                <View>
                <Card header={cardHeader} footer={cardFooter} ></Card>
                </View>


            </Layout>
            <BottomNav />
        </SafeAreaView>
    )

}

export default HomeScreen;


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