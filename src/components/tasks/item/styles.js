import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 1
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    color: {
        height: '100%',
        aspectRatio: 1,
        height: 60
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