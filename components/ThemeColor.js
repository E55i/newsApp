import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import Icon from '@expo/vector-icons/Ionicons'

export default function ThemeColor({...props}) {

const handleClick = (value) => {
    if(value===1){
        props.setThemeColors(['#FF8A22', '#25CED1'])
    }
    else{
        props.setThemeColors(['#AF3B6E', '#163B6E'])
    }
  }


return (
    <View style={styles.container}>
        <View style={[styles.iconBackground, { backgroundColor: props.effectColor }]}>
            <Icon
                name="color-palette-outline"
                size={28}
                color="#FFFFFF"
            />
        </View>
        <View style={[styles.colorThemeContainer, { borderBottomColor: props.effectColor }]}>
            <Text style={styles.infoText}>Color theme</Text>
            <TouchableOpacity 
            style={styles.fristTheme}
            onPress={()=>handleClick(1)}>
            <Image source={require('../assets/Theme1.png')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.secondTheme}
            onPress={()=>handleClick(2)}>
            <Image source={require('../assets/Theme2.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
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
    colorThemeContainer:{
        flexDirection: 'row',
        borderBottomWidth: 2,
        padding: 8,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        width: '40%',
    },
    fristTheme:{
        marginRight:20,
    },
    secondTheme:{
        marginLeft:30,
    },
    image:{
        width: 50, 
        height: 50,
        borderRadius:30,
    },
})
