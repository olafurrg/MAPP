import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0000008a',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
  },
  content: {
    minHeight: 200,
    minWidth: '80%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'relative',
  }
});
