import { View, Text } from 'react-native'
import React from 'react'

const RideLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <View>
            <Text>TOP OF THE LAYOUT</Text>
            {children}
            <Text>Bottom of the layout</Text>
        </View>
    )
}

export default RideLayout