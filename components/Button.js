import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Button({ onPress, text, icon, style }) {
    icon = icon ? icon : null
    text = text ? <Text style={styles.txt}>{text}</Text> : null
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.touchable, style]}>
          {text}
          {icon}
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchable: { 
        flexDirection: 'row', 
        alignItems: 'center',  
        justifyContent: 'center', 
        padding: 10, 
        backgroundColor: 'rgb(80,80,225)', 
        borderRadius: 5
    },
    txt: {
        color: '#fff', 
        fontFamily: 'Montserrat-Bold'
    }
})

export default Button;