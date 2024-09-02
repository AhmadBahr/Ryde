import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({
    onPress,
    title,
    IconLeft,
    IconRight,
    style,
    ...props
}) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.button, style]} // Apply custom styles here
        {...props}
    >
        {IconLeft && <IconLeft />}
        <Text style={styles.text}>{title}</Text>
        {IconRight && <IconRight />}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 999,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue', // Blue background
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2,
    },
    text: {
        color: 'white', // White text
        fontSize: 16,
    },
});

export default CustomButton;
