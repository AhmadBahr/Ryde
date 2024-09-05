import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GoogleInputProps } from '@/types/type';
import { icons } from '@/constants';

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const GoogleTextInput = ({
    icon,
    initialLocation,
    textInputBackgroundColor,
    handlePress,
}: GoogleInputProps) => (
    <View style={[styles.container, { backgroundColor: textInputBackgroundColor }]}>
        <GooglePlacesAutocomplete
            fetchDetails={true}
            placeholder="Where you want to go?"
            debounce={200}
            onPress={(data, details = null) => {
                handlePress({
                    latitude: details?.geometry.location.lat!,
                    longitude: details?.geometry.location.lng!,
                    address: data.description,
                });
            }}
            renderLeftButton={() => (
                <View style={styles.iconContainer}>
                    <Image
                        source={icon ? icon : icons.search}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
            )}
            textInputProps={{
                placeholderTextColor: 'gray',
                placeholder: initialLocation ?? "Where do you want to go?",
                style: styles.textInput,
            }}
            query={{
                key: googlePlacesApiKey,
                language: 'en',
            }}
            styles={{
                textInputContainer: styles.textInputContainer,
                listView: styles.listView,
                row: styles.row,
                separator: styles.separator,
            }}
        />
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
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
    },
    icon: {
        width: 24,
        height: 24,
    },
    textInputContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: 15,
        padding: 10,
        height: 50,
    },
    textInput: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        padding: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        width: '100%',
    },
    listView: {
        position: 'absolute',
        top: 50,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        zIndex: 50,
    },
    row: {
        padding: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        backgroundColor: 'white',
    },
    separator: {
        height: 0.5,
        backgroundColor: 'lightgray',
    },
});

export default GoogleTextInput;
