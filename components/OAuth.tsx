import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "../constants";

const OAuth = () => {
    const handleGoogleSignIn = () => {
        // Implement Google sign-in logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.separator}>
                <View style={styles.line} />
                <Text style={styles.text}>Or</Text>
                <View style={styles.line} />
            </View>
            <CustomButton
                title="Login with Google"
                IconLeft={() => (
                    <Image
                        source={icons.google}
                        resizeMode="contain"
                        style={styles.icon}
                    />
                )}
                bgVarient="outline"
                textVarient="primary"
                onPress={handleGoogleSignIn}
                style={styles.button}
                IconRight={undefined}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'center',
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 12,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    button: {
        width: '100%',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 24,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1
    },
});

export default OAuth;
