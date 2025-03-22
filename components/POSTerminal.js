import React from "react";
import {View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "../styles/styles";

const POSTerminal = () => {
    return (
        <View style={styles.illustrationContainer}>
            <View style={styles.posTerminal}>
                <View style={styles.posScreen}>
                    <View style={styles.receiptPaper} />
                </View>
                <View style={styles.posKeypad}>
                    {[...Array(9)].map((_, i) => (
                        <View key={i} style={styles.posKey} />
                    ))}
                </View>
                <View style={styles.posCardSlot} />
            </View>
            <View style={styles.successCheckmark}>
                <MaterialCommunityIcons name="check-circle" size={32} color="#4CD964" />
            </View>
        </View>
    );
};

export default POSTerminal;
