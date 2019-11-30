import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  property: {
    width: '100%',
    padding: 10,
  },
  propertyText: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    minHeight: 35,
    maxHeight: 140,
    backgroundColor: '#dcdcdc',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
  },
  image: {
    marginTop: 10,
    width: 'auto',
    minHeight: 100,
    height: 100,
    borderRadius: 6,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
  },
  preview: {
    alignSelf: 'center',
    color: '#dcdcdc',
    fontSize: 24,
  },
  submit: {
    height: 35,
    width: '100%',
    backgroundColor: '#4caf50',
    alignContent: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
  }
});
