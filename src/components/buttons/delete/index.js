import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const DeleteButton = ({action}) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={action}>
        <Text style={styles.button}>
            <Icon name="trash-o" size={20} />
        </Text>
    </TouchableOpacity>
);

export default DeleteButton;