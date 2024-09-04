import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
    const region ={}
    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_DEFAULT}
                style={styles.map}
                mapType="mutedStandard"
                showsPointsOfInterest={false}
                // initialRegion={{reigon}}
                showsUserLocation={true}
                userInterfaceStyle="light"
            />
            <View style={styles.overlay}>
                <Text style={styles.overlayText}>Map</Text>
            </View>
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
        tintColor:'black'
    },
    overlayText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
