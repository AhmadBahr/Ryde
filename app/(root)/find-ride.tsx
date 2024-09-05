import { View, Text } from 'react-native'
import { useLocationStore } from '@/store'
import React from 'react'
import RideLayout from '@/components/RideLayout'

const findride = () => {
    const { userAddress, destinationAddress, setDestinationLocation, setUserLocation } = useLocationStore()
    return (
        <RideLayout>
            <Text className='text-2xl'>Find Ride {userAddress}</Text>
        </RideLayout>
    )
}

export default findride