import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        height: 150,
        aspectRatio: 1
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
    description: {
        backgroundColor: '#fcfcfc',
        height: '100%',
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: '#333'
    },
    info: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 2,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row'
    },
    buttonContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'

    }
});