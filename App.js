import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountButton from './Components/button';
import ResetButon from './Components/resetButton';
import Timer from './Components/timer'

export default function App() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [pauseGame, setPauseGame] = useState(true);
  const [endGame, setEndGame] = useState(false);

  const resetCount = () => {
    setCount(0);
    setTimeLeft(10);
    setEndGame(false);
    setPauseGame(true);
  }

  const plusOne = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    if(count == 1){
    setPauseGame(false);
  }
    let interval = null;
    if (!pauseGame) {
      interval = setTimeout(() => {
        setTimeLeft(timeLeft - .01);
      }, 1);
    }
    if(timeLeft <= 0.01){
      setPauseGame(true);
      setEndGame(true);
    }
    return () => clearInterval(interval);
  });


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Click to add 1</Text>
      <CountButton disabled={endGame} count={count} onClick={() => plusOne()}/>
      <Timer time={timeLeft.toFixed(2)}/>
      <ResetButon onClick={() => resetCount()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
  },
  header: {
    fontSize: 25,
    textAlign: 'center', 
    marginTop: 100
  }
});
