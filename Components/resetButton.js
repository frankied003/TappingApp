import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const ResetButton = (props) => {

    return (
        <TouchableOpacity style={styles.button} onPress={props.onClick}>
            <Text style={styles.text}>RESET</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {  
        borderWidth: 1, 
        borderColor: 'grey', 
        borderRadius: 12, 
        padding: 8,
        overflow: 'hidden'
    },
    text: {
        fontSize: 20
    }
});

export default ResetButton;