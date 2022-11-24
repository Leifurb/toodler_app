import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';

const Lists = ({ route, navigation }) => {

    const {boardId, title} = route.params;

    console.log(boardId,title);
    useEffect(() => {
        navigation.setOptions({title: title})
      });


    return (
        <Text>
            {boardId},{title}
        </Text>
    );
}
export default Lists;