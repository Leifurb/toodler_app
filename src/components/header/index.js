import { Text, SafeAreaView } from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <SafeAreaView style={styles.header}> 
            <Text style={styles.logo}>Toodler</Text>
        </SafeAreaView>
    );
}

export default Header;