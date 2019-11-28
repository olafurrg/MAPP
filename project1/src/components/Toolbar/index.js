import React, { useState, useCallback } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove }) => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
      setCount(count + 1);
  }, [setCount, count]);

  const decrementCount = useCallback(() => {
      setCount(count - 1);
  }, [setCount, count]);

  return (
    <>
      <View styleName="horizontal" style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction} onPress={incrementCount}>
          <Text style={styles.toolbarActionText}>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.toolbarAction} onPress={decrementCount}>
          <Text style={styles.toolbarActionText}>Remove</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.count}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </>
  );
}

export default Toolbar;
