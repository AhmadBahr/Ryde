import { GoogleInputProps } from "@/types/type";
import { Text, View, StyleSheet } from "react-native";

const GoogleTextInput = ({
    icon,
    initialLocation,
    textInputBackgroundColor,
    handlePress,
}: GoogleInputProps) => (
    <View style={[styles.container, , { backgroundColor: textInputBackgroundColor }]}>
        <Text>Search</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 50,
        borderRadius: 15,
        marginBottom: 20,
    },
});

export default GoogleTextInput;
