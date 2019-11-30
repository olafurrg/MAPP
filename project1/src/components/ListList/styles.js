import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: height,
  },
  listList: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-start',
    left: 0,
    bottom: 0,
    height: height,
  },
  list: {
    width: width - 70,
    backgroundColor: '#fff',
    minHeight: 100,
    marginLeft: 35,
    marginRight: 35,
  },
  listOdd: {
    width: width - 70,
    backgroundColor: '#a1a1a1',
    minHeight: 100,
    marginLeft: 35,
    marginRight: 35,
  },
  name: {
    color: 'red',
  },
  prevList: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'red',
    height: '100%',
    width: 35,
  },
  nextList: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    height: '100%',
    width: 35,
  }
})
