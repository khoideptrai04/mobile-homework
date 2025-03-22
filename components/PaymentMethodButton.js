import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {Ionicons, FontAwesome} from "@expo/vector-icons";
import styles from "../styles/styles";

const PaymentMethodButton = ({icon, text, isActive, isFontAwesome = false}) => {
    return (
        <TouchableOpacity style={[styles.paymentMethodButton, isActive && styles.activePaymentMethod]}>
            {isFontAwesome ? <FontAwesome name={icon} size={20} color={isActive ? "#fff" : "#333"} /> : <Ionicons name={icon} size={20} color={isActive ? "#fff" : "#333"} />}
            <Text style={[styles.paymentMethodText, isActive && {color: "#fff"}]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default PaymentMethodButton;
