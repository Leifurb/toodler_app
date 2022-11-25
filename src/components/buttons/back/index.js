import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const BackButton = ({action}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={action}>
            <Text style={styles.button}>
                back
            </Text>
        </TouchableOpacity>
    </View>
);

export default BackButton;