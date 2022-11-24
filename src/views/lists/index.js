import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const Lists = ({ route, navigation }) => {

    const {listId} = route.params;

    console.log(listId);

    return (
        <Text>
            {listId}
        </Text>
    );
}
export default Lists;