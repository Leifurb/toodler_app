import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const AddButton = ({action}) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={action}>
            <Text style={styles.button}>
                +
            </Text>
        </TouchableOpacity>
    </View>
);

export default AddButton;