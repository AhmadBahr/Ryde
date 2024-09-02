import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { images, icons } from "@/constants";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onSignUpPress = async () => {
        // Handle sign-up logic here
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={images.signUpCar} style={styles.image} />
                    <Text style={styles.title}>
                        Create your Account
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <InputField
                        label="Name"
                        placeholder="Enter your name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />
                    <InputField
                        label="Email"
                        placeholder="Enter your Email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter your password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />
                    <CustomButton
                        title="Sign Up"
                        onPress={onSignUpPress}
                        style={styles.signUpButton} IconLeft={undefined} IconRight={undefined}
                    />


                    <Link href="/sign-in" style={styles.link}>
                        <Text style={styles.text}>Already have an account? </Text>
                        <Text style={styles.highlightedText}>Log In</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 250,
    },
    image: {
        width: '100%',
        height: 250,
        zIndex: 0,
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontFamily: 'Jakarta-SemiBold',
        position: 'absolute',
        bottom: 5,
        left: 5,
    },
    inputContainer: {
        padding: 20,
    },
    signUpButton: {
        position: 'absolute',
        bottom: -35,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#007AFF',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 24,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    link: {
        marginTop: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#B0B0B0', 
    },
    highlightedText: {
        fontSize: 16,
        color: '#007AFF', 
        fontWeight: 'bold',
    },
});

export default SignUp;
