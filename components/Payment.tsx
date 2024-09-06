import React, { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { fetchAPI } from '@/lib/fetch';
import { PaymentProps } from '@/types/type';
import { PaymentSheetError, useStripe } from '@stripe/stripe-react-native';
import { Alert } from 'react-native';
import { Text } from 'react-native';

const Payment = ({
    fullName,
    email,
    amount,
    driverId,
    rideTime,
}: PaymentProps) => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [success, setSuccess] = useState(false);

    const confirmHandler = async (paymentMethod, intentCreationCallback) => {
        try {
            const response = await fetchAPI('/api/stripe/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethodId: paymentMethod.id,
                    name: fullName || email.split('@')[0], 
                    email,
                    amount,
                    driverId,
                    rideTime,
                }),
            });

            const { paymentIntent, customer } = await response.json();

            if (paymentIntent && paymentIntent.client_secret) {
                intentCreationCallback({ clientSecret: paymentIntent.client_secret });

                const paymentResult = await fetchAPI('/api/stripe/pay', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        paymentIntentId: paymentIntent.id,
                        paymentMethodId: paymentMethod.id,
                        customerId: customer.id,
                    }),
                });

                const result = await paymentResult.json();
                if (!result.success) {
                    throw new Error('Payment failed.');
                }
            } else {
                intentCreationCallback({ error: 'Failed to retrieve client secret' });
            }
        } catch (error) {
            console.error('Error in confirmHandler:', error);
            intentCreationCallback({ error: error.message });
        }
    };

    const initializePaymentSheet = async () => {
        const { error } = await initPaymentSheet({
            merchantDisplayName: "Ride", 
            intentConfiguration: {
                mode: {
                    amount: amount * 100, 
                    currencyCode: "USD",
                },
                confirmHandler: confirmHandler, 
            },
        });

        if (error) {
            console.error('Error initializing payment sheet:', error);
            Alert.alert('Payment Initialization Error', error.message);
        }
    };

    const openPaymentSheet = async () => {
        await initializePaymentSheet();
        const { error } = await presentPaymentSheet();

        if (error) {
            if (error.code === PaymentSheetError.Canceled) {
                Alert.alert('Payment Canceled', error.message);
            } else {
                Alert.alert('Payment Failed', error.message);
            }
        } else {
            setSuccess(true);
            Alert.alert('Payment Successful', 'Your ride has been confirmed!');
        }
    };

    return (
        <>
            <CustomButton
                title="Confirm Ride"
                className="my-10"
                onPress={openPaymentSheet}
            />
            {success && <Text>Payment successful! Ride confirmed.</Text>}
        </>
    );
};

export default Payment;
