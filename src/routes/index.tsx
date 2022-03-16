import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from "./../screens/HomePage"
import { Inventory } from "./../screens/Inventory"
import { Diary } from "./../screens/Diary"
import { Details } from "./../screens/Details"

const Stack = createNativeStackNavigator();

export const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} options={{
                title: 'Oshri Ben David Fitness & Nutrition',
                headerStyle: {
                    backgroundColor: 'gray',
                },
            }} />
            <Stack.Screen name="Inventory" component={Inventory} options={{
                title: 'תפריט',
                headerStyle: {
                    backgroundColor: 'gray',
                },
            }} />
            <Stack.Screen name="Diary" component={Diary} options={{
                title: 'יומן',
                headerStyle: {
                    backgroundColor: 'gray',
                },
            }} />
            <Stack.Screen name="Details" component={Details} options={{
                title: 'פרטים אישיים',
                headerStyle: {
                    backgroundColor: 'gray',
                },
            }} />
        </Stack.Navigator>
    );
}
