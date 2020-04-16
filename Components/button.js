import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const CountButton = (props) => {

return (
    <TouchableOpacity disabled={props.disabled} style={styles.box} onPress={props.onClick}>
        <Text style={styles.countNumber}>{props.count}</Text>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 3, width: 3 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        height: 350,
        width: 350,
        marginTop: 100,
        marginBottom: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    countNumber: {
        fontSize: 50
    }
})

export default CountButton;