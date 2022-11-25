import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1
    },
    header: {
        textAlign: 'center',
        fontSize: 28,
        marginVertical: 30
    },
    btnContainer: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 5,
        marginRight: 10
    },
    button: {
        paddingHorizontal: 10,
        marginRight: 10
    },
    btnRight: {
      flex: 1,
      flexDirection: 'row-reverse',
    },
    delete: {
      color: 'red'
    }
});