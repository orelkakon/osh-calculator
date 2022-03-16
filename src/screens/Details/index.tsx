import React, { useState } from "react";
import { Text, View, SafeAreaView, Switch, TextInput } from 'react-native';
import { styles } from "./style"

export const Details = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ color: "white" }}>משקל</Text>
                <TextInput style={styles.input} placeholder="משקל"></TextInput>
            </View>
        </SafeAreaView>
    );
}
