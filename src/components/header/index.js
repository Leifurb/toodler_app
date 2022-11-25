import { Text, SafeAreaView, Button, View } from 'react-native';
 
import styles from './styles';
 
const Header = ({title}) => {
    return (
        <View style={styles.header}>
            {title == undefined ? (<Text style={styles.logo}>Toodler</Text>) : (<Text style={styles.title}>{title}</Text>)}
        </View>
    );
}
 
export default Header;