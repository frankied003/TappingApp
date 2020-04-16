import React from 'react';
import { Text, StyleSheet } from 'react-native';


const Timer = (props) => {

return (
    <Text style={styles.timerNumber}>{props.time}</Text>
);
}

const styles = StyleSheet.create({
    timerNumber: {
        fontSize: 40,
        marginBottom: 40
    }
})

export default Timer;