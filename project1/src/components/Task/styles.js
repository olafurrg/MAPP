import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  task: {
    width: width - 70,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
  isFinished: {
    flex: 1,
  }
})
