import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    // Common Styles
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    header: {
        paddingTop: 10,
        marginBottom: 15,
    },
    bottomIndicator: {
        width: 60,
        height: 5,
        backgroundColor: "#eee",
        borderRadius: 3,
        alignSelf: "center",
        marginVertical: 15,
    },

    // Payment Screen Styles
    checkoutHeader: {
        marginBottom: 30,
    },
    checkoutTitle: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 5,
    },
    priceText: {
        fontSize: 32,
        fontWeight: "600",
        color: "#4CD964",
        marginBottom: 3,
    },
    includingText: {
        fontSize: 12,
        color: "#888",
    },
    paymentMethodContainer: {
        flexDirection: "row",
        marginBottom: 25,
    },
    paymentMethodButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: "#f5f5f5",
    },
    activePaymentMethod: {
        backgroundColor: "#4CD964",
    },
    paymentMethodText: {
        marginLeft: 8,
        fontWeight: "500",
        color: "#333",
    },
    formContainer: {
        marginBottom: 20,
    },
    formGroup: {
        marginBottom: 20,
    },
    formRow: {
        flexDirection: "row",
    },
    formLabel: {
        fontSize: 12,
        marginBottom: 8,
        color: "#666",
    },
    formLabelRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 14,
        backgroundColor: "#f9f9f9",
    },
    cardNumberContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 8,
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        paddingRight: 15,
    },
    cardNumberInput: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 14,
    },
    cardIconsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    noteContainer: {
        marginBottom: 30,
    },
    noteText: {
        fontSize: 12,
        color: "#888",
        lineHeight: 18,
    },
    payButton: {
        backgroundColor: "#4CD964",
        borderRadius: 16,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    payButtonText: {
        color: "#fff",
        fontWeight: "600",
        marginLeft: 8,
    },

    // Success Screen Styles
    successContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    successContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
    },
    illustrationContainer: {
        width: 180,
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    posTerminal: {
        width: 120,
        height: 150,
        backgroundColor: "#f0f7ff",
        borderRadius: 12,
        alignItems: "center",
        padding: 10,
    },
    posScreen: {
        width: "100%",
        height: 60,
        backgroundColor: "#e1eeff",
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    receiptPaper: {
        width: "80%",
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 4,
    },
    posKeypad: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    posKey: {
        width: "30%",
        height: 15,
        backgroundColor: "#e1eeff",
        borderRadius: 4,
        marginBottom: 5,
    },
    posCardSlot: {
        width: "80%",
        height: 10,
        backgroundColor: "#c7dcff",
        borderRadius: 4,
        marginTop: 5,
    },
    successCheckmark: {
        position: "absolute",
        bottom: 15,
        right: 20,
        width: 40,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    successTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
    },
    successDesc: {
        fontSize: 12,
        color: "#888",
        textAlign: "center",
        lineHeight: 18,
        marginBottom: 20,
        maxWidth: "80%",
    },
    checkDetailsButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    checkDetailsText: {
        color: "#5B5BD6",
        fontWeight: "500",
        marginRight: 5,
    },
    downloadButton: {
        backgroundColor: "#5B5BD6",
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "90%",
    },
    downloadButtonText: {
        color: "#fff",
        fontWeight: "600",
        textAlign: "center",
    },
});

export default styles;
