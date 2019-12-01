import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: height - 300,
  },
  listList: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-start',
    left: 35,
    top: 0,
    bottom: 0,
  },
  prevList: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'red',
    width: 35,
    fontSize: 30,
  },
  nextList: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'red',
    width: 35,
    fontSize: 30,
  },
  nextListText: {
    fontSize: 30,
  }
})
