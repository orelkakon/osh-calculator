import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const GenderButton = ({ styles, setGender }) => {
    const [maleBgColor, setMaleBgColor] = useState("")
    const [femaleBgColor, setFemaleBgColor] = useState("")

    const editBgColor = (gender: string) => {
        if (gender === "male") {
            setMaleBgColor("blue")
            setFemaleBgColor("black")
            setGender('male')
        } else {
            setFemaleBgColor("pink")
            setMaleBgColor("black")
            setGender('female')
        }
    }
    return (
        <View style={styles.genderButtonView}>
            <TouchableOpacity
                style={[styles.maleButton, { borderColor: maleBgColor }]}
                onPress={() => { editBgColor("male") }}
            >
                <Text style={styles.maleText}>זכר</Text>
            </TouchableOpacity >
            <TouchableOpacity
                style={[styles.femaleButton, { borderColor: femaleBgColor }]}
                onPress={() => { editBgColor("female") }}
            >
                <Text style={styles.femaleText}>נקבה</Text>
            </TouchableOpacity >
        </View>
    );
}


