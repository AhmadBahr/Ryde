import CustomButton from '@/components/CustomButton';
import { fetchAPI } from '@/lib/fetch';
import { PaymentProps } from '@/types/type';
import { PaymentMethod, PaymentSheetError, useStripe } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { Alert } from 'react-native';

const Payment = ({
    fullName,
    email,
    amount,
    driverId,
    rideTime,
}: PaymentProps) => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [success, setsuccess] = useState(false)

    const confirmHandler = async (paymentMethod, intentCreationCallback) => {
        const { paymentIntent, customer } = await fetchAPI('/(api)/(stripe)/create', {
            method: 'POST',
            body: JSON.stringify({
                paymentMethod: paymentMethod,
                name: fullName || email.split('@')[0],
                email: email,
                amount: amount,
                driverId: driverId,
                rideTime: rideTime
            })
        })
        const { clientSecret, error } = await Response.json();
        if (clientSecret) {
            intentCreationCallback({ clientSecret })
        } else {
            intentCreationCallback({ error })
        }
    }

    const initializePaymentSheet = async () => {
        const { error } = await initPaymentSheet({
            merchantDisplayName: "Ride",
            intentConfiguration: {
                mode: {
                    amount: 1099,
                    currencyCode: "USD",
                },
                confirmHandler: confirmHandler,
            },
        });
        if (error) {
            //
        }
    }

    const openPaymentSheet = async () => {
        await initializePaymentSheet();
        const { error } = await presentPaymentSheet();
        if (error) {
            if (error.code === PaymentSheetError.Canceled) {
                Alert.alert(`Error code: ${error.code}`, error.message);
            } else {
                setsuccess(true)
            }
        }
    }

    return (
        <>
            <CustomButton
                title="Confirm Ride"
                className="my-10"
                onPress={openPaymentSheet}
            />
        </>
    );
};

export default Payment;
