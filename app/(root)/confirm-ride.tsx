import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RideLayout from '@/components/RideLayout';
import DriverCard from '@/components/DriverCard';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { useDriverStore } from '@/store';

const ConfirmRide = () => {
    const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
    return (
        <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
            <FlatList
                data={drivers}
                renderItem={({ item }) => (
                    <DriverCard
                        item={item}
                        selected={selectedDriver!}
                        setSelected={() => { setSelectedDriver(Number(item.id)!)}}
                    />
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <CustomButton
                            title="Select Ride"
                            onPress={() => router.push('/(root)/book-ride')} IconLeft={undefined} IconRight={undefined} style={undefined} />
                    </View>
                )}
            />
        </RideLayout>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
});

export default ConfirmRide;
