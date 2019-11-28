import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: 'blue',
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    forntWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
