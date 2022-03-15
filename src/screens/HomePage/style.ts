import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 450,
        borderRadius: 10,
        marginBottom: 50
    },
    tinyLogo: {
        width: 50,
        height: 50,
        backgroundColor: 'transparent'
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: "bold",
    },
    button: {
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    },
    footer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: '12%',
        backgroundColor: "gray"
    },
    footerText: {
        fontWeight: "bold",
        fontSize: 20
    }
});