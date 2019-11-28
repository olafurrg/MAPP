import React from 'react-native';
import { View, TouchableHighlights, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlights style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create board</Text>
    </TouchableHighlights>
    <TouchableHighlights style={styles.toolbarAction} onPress={onRemove}>
      <Text style={styles.toolbarActionText}>Delete</Text>
    </TouchableHighlights>
  </View>
);

export default Toolbar;
