import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Button = props => {
  const {label, pressHandler} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
