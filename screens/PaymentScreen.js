import React, {useState} from "react";
import {Text, View, SafeAreaView, TextInput, TouchableOpacity, StatusBar} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import CardInput from "../components/CardInput";
import PaymentMethodButton from "../components/PaymentMethodButton";
import styles from "../styles/styles";

const PaymentScreen = ({navigation}) => {
    const [cardNumber, setCardNumber] = useState("5281 4141 0151 8472");
    const [cardholderName, setCardholderName] = useState("Christie Doe");
    const [expiryDate, setExpiryDate] = useState("06 / 2024");
    const [cvv, setCvv] = useState("315");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            {/* Checkout Title */}
            <View style={styles.checkoutHeader}>
                <Text style={styles.checkoutTitle}>Checkout 🇹🇿</Text>
                <Text style={styles.priceText}>₹ 1,527</Text>
                <Text style={styles.includingText}>including GST (18%)</Text>
            </View>

            {/* Payment Method Selection */}
            <View style={styles.paymentMethodContainer}>
                <PaymentMethodButton icon="card-outline" text="Credit card" isActive={true} />
                <PaymentMethodButton icon="apple" text="Apple Pay" isActive={false} isFontAwesome={true} />
            </View>

            {/* Card Details Form */}
            <View style={styles.formContainer}>
                <CardInput cardNumber={cardNumber} setCardNumber={setCardNumber} cardholderName={cardholderName} setCardholderName={setCardholderName} expiryDate={expiryDate} setExpiryDate={setExpiryDate} cvv={cvv} setCvv={setCvv} />
            </View>

            <View style={styles.noteContainer}>
                <Text style={styles.noteText}>We will send you order details to your email after successful payment.</Text>
            </View>

            {/* Pay Button */}
            <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("Success")}>
                <Ionicons name="lock-closed" size={16} color="#fff" />
                <Text style={styles.payButtonText}>Pay for the order</Text>
            </TouchableOpacity>

            {/* Bottom Indicator */}
            <View style={styles.bottomIndicator} />
        </SafeAreaView>
    );
};

export default PaymentScreen;
