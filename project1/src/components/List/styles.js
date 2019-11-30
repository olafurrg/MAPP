import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  list: {
    width: width - 70,
    backgroundColor: '#fff',
  },
  listOdd: {
    backgroundColor: '#a1a1a1',
  },
  name: {
    color: 'red',
  },
})
