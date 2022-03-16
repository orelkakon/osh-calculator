import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';

const menuLogo = "./../../assets/add.png"
const diaryLogo = "./../../assets/dairy.png"
const detailsLogo = "./../../assets/details.png"

export const FooterBar = ({ styles, navigation }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Diary')}
                style={styles.button}>
                <Image style={styles.tinyLogo} source={require(diaryLogo)} />
                <Text style={styles.footerText}>יומן</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Inventory')}
                style={styles.button}>
                <Image style={styles.tinyLogo} source={require(menuLogo)} />
                <Text style={styles.footerText}>תפריט</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
                style={styles.button}>
                <Image style={styles.tinyLogo} source={require(detailsLogo)} />
                <Text style={styles.footerText}>נתונים</Text>
            </TouchableOpacity>
        </View>
    );
}


