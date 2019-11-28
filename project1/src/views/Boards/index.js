import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';

const Boards = ({ navigation: { navigate } }) => (
  <View styles={styles.container}>
    <Text>{'Hallo Veröld'}</Text>
    <Toolbar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Boards;
