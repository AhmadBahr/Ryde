import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OAuth = () => (
    <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>Or</Text>
        <View style={styles.line} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        gap: 12,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    text: {
        fontSize: 18,
        color: '#000', 
    },
});

export default OAuth;
