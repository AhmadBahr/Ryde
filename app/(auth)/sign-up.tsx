import InputField from "@/components/InputField";
import { images, icons } from "@/constants";
import { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={images.signUpCar} style={styles.image} />
                    <Text style={styles.title}>
                        Create your Account
                    </Text>
                </View>
                <View className="p-5">
                    <InputField
                        label="Name"
                        placeholder="Enter your name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value: any) => setForm({ ...form, name: value })}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

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
});

export default SignUp;
