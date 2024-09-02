import React from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

const InputField = ({ label, labelStyle,icon,secureTextEntry=false }) => (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, labelStyle]}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontFamily: 'jakartasemibold',
        marginBottom: 12,
    },
});

export default InputField;
