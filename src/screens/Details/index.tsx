import React, { useState } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableWithoutFeedback } from 'react-native';
import { styles } from "./style"
import { Keyboard } from 'react-native'
import { GenderButton } from "../../components/genderButton";

export const Details = () => {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [year, setYear] = useState("")
    const [gender, setGender] = useState("")
    
    const calcBMI = () => {
        const weightNum = Number(weight)
        const heightNum = Number(height)
        if(weightNum > 0 && heightNum > 0){
            const result = Math.round(weightNum / Math.pow(heightNum, 2) * 10000)
            return result

        }
        else return ""
    }
    const calcBMR = () => {
        const weightNum = Number(weight)
        const heightNum = Number(height)
        const ageNum = Number(year)

        if(weightNum > 0 && heightNum > 0 && ageNum > 0){
            if(gender === "male"){
                const bmr = 88.362 + (13.397 * weightNum) + (4.799 * heightNum) - (5.677 * ageNum)
                return Math.round(bmr * 100) / 100
                
            } else {
                const bmr = 447.593 + (9.247 * weightNum) + (3.098 * heightNum) - (4.330 * ageNum)
                return Math.round(bmr * 100) / 100
            }
        }
        else return ""
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>משקל</Text>
                        <TextInput keyboardType="numeric" style={styles.input} value={weight} placeholder={`ק"ג`} onChangeText={(num) => setWeight(num)}></TextInput>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>גובה</Text>
                        <TextInput keyboardType="numeric" style={styles.input} value={height} placeholder={`ס"מ`} onChangeText={(num) => setHeight(num)}></TextInput>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>גיל</Text>
                        <TextInput keyboardType="numeric" style={styles.input} value={year} placeholder={`שנים`} onChangeText={(num) => setYear(num)}></TextInput>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>מין</Text>
                        <GenderButton styles={styles} setGender={setGender}/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>BMR</Text>
                        <Text style={styles.text}>{calcBMR()}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>BMI</Text>
                        <Text style={styles.text}>{calcBMI()}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}
