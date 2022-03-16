import React, { useState } from "react";
import { Text, View, SafeAreaView, Switch, TextInput } from 'react-native';
import { styles } from "./style"

export const Details = () => {
    const [mass, setMass] = useState("")
    const [height, setHeight] = useState("")
    const [year, setYear] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.row}>
                    <Text style={styles.text}>משקל</Text>
                    <TextInput keyboardType="numeric" style={styles.input} value={mass} placeholder={`ק"ג`} onChangeText={(num) => setMass(num)}></TextInput>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>גובה</Text>
                    <TextInput keyboardType="numeric" style={styles.input} value={height} placeholder={`ס"מ`} onChangeText={(num) => setHeight(num)}></TextInput>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>גיל</Text>
                    <TextInput keyboardType="numeric" style={styles.input} value={year} placeholder={`שנים`} onChangeText={(num) => setYear(num)}></TextInput>
                </View>
            </View>
        </SafeAreaView>
    );
}
