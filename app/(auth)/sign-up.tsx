import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { images, icons } from "@/constants";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";

const SignUp = () => {
    const { isLoaded, signUp, setActive } = useSignUp()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [verification, setVerification] = useState({
        state: '',
        error: '',
        code: ''
    });

    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                emailAddress: form.email,
                password: form.password,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            setVerification({ ...verification, state: 'pending' })
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2))
        }
    }

    const onPressVerify = async () => {
        if (!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code: verification.code,
            });

            if (completeSignUp.status === 'complete') {

                await setActive({ session: completeSignUp.createdSessionId })
                setVerification({ ...verification, state: 'success' })
            } else {
                setVerification({ ...verification, state: 'failed', error: 'Verifiction failed.' })
            }
        } catch (err: any) {
            setVerification({ ...verification, state: 'failed', error: err.errors[0].longMessage })
        }
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={images.signUpCar} style={styles.image} />
                    <Text style={styles.title}>Create your Account</Text>
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
                        style={styles.signUpButton}
                        IconLeft={undefined}
                        IconRight={undefined}
                    />
                </View>
                <OAuth />
                <Link href="/sign-in" style={styles.link}>
                    <Text style={styles.text}>Already have an account? </Text>
                    <Text style={styles.highlightedText}>Log In</Text>
                </Link>
            </View>
            <ReactNativeModal isVisible={verification.state==='success'}>
                <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                    <Image source={images.check} className="w-[110px] h-[110px] mx-auto my-5">

                    </Image>
                </View>

            </ReactNativeModal>
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

export default SignUp;
