import React from "react";
import { 
    Image, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
    Keyboard 
} from "react-native";

const InputField = ({ 
    label, 
    labelStyle, 
    icon, 
    secureTextEntry = false, 
    containerStyle, 
    inputStyle, 
    iconStyle, 
    ...props 
}) => (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, labelStyle]}>{label}</Text>
                <View style={[styles.inputWrapper, containerStyle]}>
                    {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
                    <TextInput
                        style={[styles.input, inputStyle]}
                        secureTextEntry={secureTextEntry}
                        {...props}
                    />
                </View>
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
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E5E7EB',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    },
});

export default InputField;
