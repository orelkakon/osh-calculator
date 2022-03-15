import { Text, View, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import { styles } from "./style"
import { FooterBar } from "./../../components/footerBar"
const oshProfile = "./../../../assets/osh-homepage.jpg"

export const HomePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.title}>OSH.</Text>
                <Image source={require(oshProfile)} style={styles.logo}></Image>
            </View>
            <FooterBar styles={styles} />
        </SafeAreaView>
    );
}