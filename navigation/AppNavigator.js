import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import PaymentScreen from "../screens/PaymentScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="Success" component={SuccessScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
