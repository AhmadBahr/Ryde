import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { StripeProvider } from '@stripe/stripe-react-native';

import RideLayout from '@/components/RideLayout';
import { icons } from '@/constants';
import { formatTime } from '@/lib/utils';
import { useDriverStore, useLocationStore } from '@/store';
import Payment from '@/components/Payment';

const BookRide = () => {
    const { user } = useUser();
    const { userAddress, destinationAddress } = useLocationStore();
    const { drivers, selectedDriver } = useDriverStore();

    const driverDetails = drivers?.find((driver) => +driver.id === selectedDriver);

    return (
        <StripeProvider
            publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
            merchantIdentifier="merchant.uber.com" 
            urlScheme="myapp" 
        >
            <RideLayout title="Book Ride">
                <>
                    <Text style={styles.heading}>Ride Information</Text>

                    <View style={styles.driverContainer}>
                        <Image
                            source={{ uri: driverDetails?.profile_image_url }}
                            style={styles.driverImage}
                        />

                        <View style={styles.driverInfo}>
                            <Text style={styles.driverName}>{driverDetails?.title}</Text>

                            <View style={styles.ratingContainer}>
                                <Image
                                    source={icons.star}
                                    style={styles.starIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.ratingText}>{driverDetails?.rating}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Ride Price</Text>
                            <Text style={styles.infoValue}>
                                ${driverDetails?.price}
                            </Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Pickup Time</Text>
                            <Text style={styles.infoValue}>
                                {formatTime(driverDetails?.time!)}
                            </Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Car Seats</Text>
                            <Text style={styles.infoValue}>
                                {driverDetails?.car_seats}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.addressContainer}>
                        <View style={styles.addressRow}>
                            <Image source={icons.to} style={styles.icon} />
                            <Text style={styles.addressText}>
                                {userAddress}
                            </Text>
                        </View>

                        <View style={styles.addressRow}>
                            <Image source={icons.point} style={styles.icon} />
                            <Text style={styles.addressText}>
                                {destinationAddress}
                            </Text>
                        </View>
                    </View>

                    <Payment />
                </>
            </RideLayout>
        </StripeProvider>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontFamily: 'JakartaSemiBold',
        marginBottom: 16,
    },
    driverContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    driverImage: {
        width: 112,
        height: 112,
        borderRadius: 56,
    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    driverName: {
        fontSize: 20,
        fontFamily: 'JakartaSemiBold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    starIcon: {
        width: 20,
        height: 20,
    },
    ratingText: {
        fontSize: 20,
        fontFamily: 'JakartaRegular',
        marginLeft: 4,
    },
    infoBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#1E1E1E',
        marginTop: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        paddingVertical: 10,
    },
    infoLabel: {
        fontSize: 18,
        fontFamily: 'JakartaRegular',
        color: '#FFFFFF',
    },
    infoValue: {
        fontSize: 18,
        fontFamily: 'JakartaRegular',
        color: '#0CC25F',
    },
    addressContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#2C2C2C',
        paddingVertical: 10,
        width: '100%',
    },
    icon: {
        width: 24,
        height: 24,
    },
    addressText: {
        fontSize: 18,
        fontFamily: 'JakartaRegular',
        marginLeft: 8,
    },
});

export default BookRide;
