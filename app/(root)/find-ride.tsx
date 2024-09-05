import { View, Text } from 'react-native'
import { useLocationStore } from '@/store'
import React from 'react'

const findride = () => {
    const { userAddress, destinationAddress, setDestinationLocation, setUserLocation } = useLocationStore()
    return (
        <View>
            <Text className='text-2xl'>You are here: {userAddress}</Text>
            <Text className='text-2xl'>You are going to: {destinationAddress}</Text>
        </View>
    )
}

export default findride