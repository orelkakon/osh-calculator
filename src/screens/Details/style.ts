import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        direction: "rtl"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: 'gray',
        width: '100%',
        height: 60,
        padding: 10
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        textAlign: 'center',
        direction: "rtl",
        height: 40,
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "white",
        fontSize: 30,
    },
    text: {
        color: "white",
        fontSize: 40,
    },
    genderButtonView: {
        display: 'flex',
        flexDirection: 'row',
    },
    maleButton: {
        display: 'flex', 
        justifyContent: 'center',
        height: 40,
        width: 45,
        backgroundColor: 'transparent',
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 100,
        marginRight: 5
    },
    femaleButton: {
        display: 'flex',
        justifyContent: 'center',
        height: 40,
        width: 50,
        backgroundColor: 'transparent',
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 100,
    },
    maleText: {
        textAlignVertical: "center",
        fontSize: 23,
        textAlign: "center",
        color: "blue",
        borderStyle: "solid"
    },
    femaleText: {
        textAlignVertical: "center",
        fontSize: 23,
        textAlign: "center",
        color: "pink"
    }
})