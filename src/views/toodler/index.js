import { Text, View, SafeAreaView } from 'react-native';
import Boards from '../../components/boards';
import AddButton from '../../components/buttons/add';
import BoardForm from '../../components/forms/board';
import Header from '../../components/header';
import KeyboardAvoidingComponent from '../../components/input';
import Modal from '../../components/modal';

import styles from './styles';

const data = require('../../data/data.json');

const Toodler = () => {

    const input = {
        'title': 'Create new board',
        'inputs': {
            'name': ['', 'Name'],
            'thumbnailPhoto': ['', 'Image URL'],
            'description': ['', 'Description']
        }
    }

    return (
        <View style={styles.container}>
            <Header/>
            <Boards data={data}/>
        </View>
    );
}


export default Toodler;