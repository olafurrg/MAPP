import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create board</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove}>
      <Text style={styles.toolbarActionText}>Delete</Text>
    </TouchableHighlight>
  </View>
);

export default Toolbar;
