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
  colorPreview: {
    height: 30,
    alignSelf: 'center',
    width: 50,
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
