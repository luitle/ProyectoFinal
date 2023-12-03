
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7f7',
  },
  images: {
    width: 100,
    height: 100,
    margin: 5,
  },
  texto: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  resultItem: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#ececec',
    borderRadius: 10,
    elevation: 5,
  },
  resultText: {
    color: '#333',
    fontSize: 16,
    marginTop: 5,
  },
});

export default styles;
