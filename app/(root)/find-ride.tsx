import { View, Text, StyleSheet } from 'react-native';
import { useLocationStore } from '@/store';
import React from 'react';
import RideLayout from '@/components/RideLayout';
import GoogleTextInput from '@/components/GoogleTextInput';
import { icons } from '@/constants';
import CustomButton from "@/components/CustomButton";
import { router } from 'expo-router';

const FindRide = () => {
    const { userAddress, destinationAddress, setUserLocation, setDestinationLocation } = useLocationStore();

    return (
        <RideLayout title="Ride" snapPoints={['85%']}>
            <View style={styles.container}>
                <Text style={styles.label}>From</Text>
                <GoogleTextInput
                    icon={icons.target}
                    initialLocation={userAddress!}
                    textInputBackgroundColor="#f5f5f5"
                    handlePress={(location) => setUserLocation(location)}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.label}>To</Text>
                <GoogleTextInput
                    icon={icons.map}
                    initialLocation={destinationAddress!}
                    textInputBackgroundColor="transparent"
                    handlePress={(location) => setDestinationLocation(location)}
                />
            </View>
            <CustomButton
                title="Find Now"
                onPress={() => router.push('/(root)/confirm-ride')}
                style={styles.button}
                IconLeft={undefined} IconRight={undefined} />
        </RideLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
    },
    label: {
        fontSize: 18,
        fontFamily: 'JakartaSemiBold',
        marginBottom: 8,
    },
    button: {
        marginTop: 20, 
    },
});

export default FindRide;
