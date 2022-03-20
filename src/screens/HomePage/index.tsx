import { Text, View, SafeAreaView, Image } from 'react-native';
import { styles } from "./style"
import { FooterBar } from "./../../components/footerBar"
const oshProfile = "./../../../assets/osh-homepage.jpg"

export const HomePage = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.title}>OSH.</Text>
                <Image source={require(oshProfile)} style={styles.logo}></Image>
            </View>
            <FooterBar styles={styles} navigation={navigation} />
        </SafeAreaView>
    );
}
