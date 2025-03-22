import React from "react";
import {View, Text, TextInput} from "react-native";
import {Ionicons, FontAwesome} from "@expo/vector-icons";
import styles from "../styles/styles";

const CardInput = ({cardNumber, setCardNumber, cardholderName, setCardholderName, expiryDate, setExpiryDate, cvv, setCvv}) => {
    return (
        <>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Card number</Text>
                <View style={styles.cardNumberContainer}>
                    <TextInput style={styles.cardNumberInput} value={cardNumber} onChangeText={setCardNumber} keyboardType="number-pad" />
                    <View style={styles.cardIconsContainer}>
                        <FontAwesome name="cc-mastercard" size={24} color="#FF5F00" />
                        <Ionicons name="card-outline" size={24} color="#ccc" style={{marginLeft: 10}} />
                    </View>
                </View>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Cardholder name</Text>
                <TextInput style={styles.input} value={cardholderName} onChangeText={setCardholderName} />
            </View>

            <View style={styles.formRow}>
                <View style={[styles.formGroup, {flex: 1, marginRight: 10}]}>
                    <Text style={styles.formLabel}>Expiry date</Text>
                    <TextInput style={styles.input} value={expiryDate} onChangeText={setExpiryDate} placeholder="MM / YYYY" />
                </View>
                <View style={[styles.formGroup, {flex: 1, marginLeft: 10}]}>
                    <View style={styles.formLabelRow}>
                        <Text style={styles.formLabel}>CVV / CVC</Text>
                        <Ionicons name="information-circle-outline" size={16} color="#4CD964" />
                    </View>
                    <TextInput style={styles.input} value={cvv} onChangeText={setCvv} keyboardType="number-pad" maxLength={3} />
                </View>
            </View>
        </>
    );
};

export default CardInput;
