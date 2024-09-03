import React, { useCallback, useState } from "react";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { images, icons } from "@/constants";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";

const SignIn = () => {
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const onSignInPress = useCallback(async () => {
        if (!isLoaded) {
            return
        }

        try {
            const signInAttempt = await signIn.create({
                identifier: form.email,
                password: form.password
            })

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                router.replace('/')
            } else {
                // See https://clerk.com/docs/custom-flows/error-handling
                // for more info on error handling
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2))
        }
    }, [isLoaded, form.email, form.password])

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={images.signUpCar} style={styles.image} />
                    <Text style={styles.title}>Welcome 👋</Text>
                </View>
                <View style={styles.inputContainer}>
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
                        title="Sign In"
                        onPress={onSignInPress}
                        style={styles.signUpButton}
                        IconLeft={undefined}
                        IconRight={undefined}
                    />
                </View>
                <OAuth />
                <Link href="/sign-up" style={styles.link}>
                    <Text style={styles.text}>Don't have an Accont? </Text>
                    <Text style={styles.highlightedText}>Sign Up</Text>
                </Link>
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
        paddingHorizontal: 20,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 250,
        marginBottom: 20,
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
        marginBottom: 20,
    },
    signUpButton: {
        width: '100%',
        backgroundColor: '#007AFF',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 24,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20,
        marginTop: 20
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

export default SignIn;
