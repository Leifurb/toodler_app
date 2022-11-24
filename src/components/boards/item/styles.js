import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 1
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 10
    },
    container: {
        flex: 1,
        width: '100%',
        margin: '1%',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    buttonContainer: {
        position: 'absolute',
        top: '17%',
        height: '100%',
        width: '100%',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around'

    }
});