import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modal: {
        display: 'none',
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        position: 'absolute',
        top: '5%',
        left: '5%',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#f0f0f0'
    },
    container: {
        padding: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 10
    }
});