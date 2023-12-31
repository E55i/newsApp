import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/AntDesign'
import { showAlert } from '../helpers/Functions'

export default function Username({...props}) {

    const [inputUsername, setInputUsername] = useState('')

    const handleSubmit = () => {
        try {
            props.setUsername(inputUsername)
        } catch (error) {
            showAlert("Error","Error changing username")
        }
        
      }
    

    return (
        <View style={styles.container}>
            <View style={[styles.iconBackground, { backgroundColor: props.effectColor }]}>
                <Icon
                    name="user"
                    size={28}
                    color="#FFFFFF"
                />
            </View>
            <View style={[styles.usernameContainer, { borderBottomColor: props.effectColor }]}>
                <Text style={styles.infoText}>Username</Text>
                <TextInput 
                style={styles.username}
                defaultValue={props.username}
                placeholder={props.username ? '' : 'Enter username'}
                maxLength={20}
                onChangeText={text => setInputUsername(text)}
                returnKeyType='done'
                onSubmitEditing={handleSubmit}
                />
                <Button
                color= {props.effectColor}
                title="OK"
                onPress={handleSubmit}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
        marginBottom:10,
    },
    iconBackground: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight:12,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    usernameContainer:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        padding: 8,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        width: '30%',
    },
    username: {
        fontSize: 16,
        color: '#919090',
        width: '50%',
    },
})