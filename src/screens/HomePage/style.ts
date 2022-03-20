import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    logo: {
        width: 300,
        height: 450,
        borderRadius: 10,
        marginBottom: 50
    },
    tinyLogo: {
        width: 35,
        height: 35,
        backgroundColor: 'transparent'
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: "bold",
    },
    button: {
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
        marginBottom: 30
    },
    footer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: '10%',
        backgroundColor: "gray",
    },
    footerText: {
        fontWeight: "bold",
        fontSize: 20
    }
});