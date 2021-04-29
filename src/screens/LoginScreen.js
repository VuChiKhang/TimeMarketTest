import React, { useEffect, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    SafeAreaView
} from 'react-native'

import { 
    Button, 
    Divider, 
    Layout, 
    TopNavigation,
    BottomNavigation, 
    BottomNavigationTab, 
    Icon,
    Input,
} from '@ui-kitten/components';

import {useNavigation} from '@react-navigation/native'


const LoginScreen  = () => {
    const navigation = useNavigation();

    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')

    const changeHandler = e => {
        setValues({...values, [e.target.name]: e.target.value})
     }

    const handleInput = () => {
        const email = userEmail
        const pass = userPass

        if( !email){
            Alert.alert('Invalid Email', [{text: 'okay', style: 'destructive'}] )
            return;
        }

        if( pass.length < 7 || pass == ""){
            Alert.alert('Invalid Password', [{text: 'okay', style: 'destructive'}] )
            return;
        }


        setUserEmail(email)
        setUserPass(pass)
        console.log(userEmail)
        navigation.navigate('Home')
        
    }
    

    

    return(
        <SafeAreaView style={styles.safeView} >
        <TopNavigation title='LOGIN' alignment='center'/>
        <Divider/>
            <Layout style={styles.layout}>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.logo}>
                        <Text style={styles.text} > Time Marketplace Logo</Text>
                    </View>
                    <View style={styles.inputContainer} >
                        <Input
                        style={styles.input}
                        status='primary'
                        placeholder='email'
                        keyboardType='email-address'
                        value={userEmail}
                        onChangeText={setUserEmail}
                        />
                        <Input
                        style={styles.input}
                        status='primary'
                        placeholder = 'passwords'
                        secureTextEntry
                        defaultValue={userPass}
                        onChangeText={setUserPass} 
                        />
                    </View>
                    <View style={styles.buttonContainer} >
                        <Button 
                        status='primary'
                        style={styles.button}
                        onPress={handleInput}

                        > LOGIN</Button>
                        <Button 
                        status='primary'
                        style={styles.button}
                        onPress={handleInput}
                        > SIGNUP</Button>
                    </View>

                </View>
            </View>
            </Layout>
            </SafeAreaView>
    )

}

export default LoginScreen;

styles = StyleSheet.create({
    safeView:{
        flex: 1,
        backgroundColor: 'white'
    },

    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    layout:{
        flex: 1, 
    },

    loginContainer:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        height: '50%',
        bottom: '5%'
    },

    logo:{
        borderColor: 'black',
        borderWidth: 1,
        width: '45%',
        height: '40%',
        margin: 8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '6%',
        borderRadius: 8,
        
    },

    input:{
        margin: 5,
        borderRadius: 8,
    },

    inputContainer:{
        width: '90%',
        height: '30%',
        
    },

    text:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },

    buttonContainer:{
        width: '90%',
        height: '20%',
        alignContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

    button:{
        margin: 2,
        width: '35%'
        
    }

})