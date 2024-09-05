import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { router } from 'expo-router';
import { icons } from '@/constants';
import Map from '@/components/Map';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

type RideLayoutProps = {
    title?: string;
    children: React.ReactNode;
};

const RideLayout = ({ title, children }: RideLayoutProps) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <GestureHandlerRootView style={styles.container}>
            <Text>TOP OF THE LAYOUT</Text>
            <View style={styles.mapContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <View style={styles.backButton}>
                            <Image
                                source={icons.backArrow}
                                resizeMode='contain'
                                style={styles.backIcon}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.titleText}>
                        {title || 'Go Back'}
                    </Text>
                </View>
                <Map />
            </View>
            <BottomSheet ref={bottomSheetRef} snapPoints={['40%', '85%']} index={0}>
                <BottomSheetScrollView style={{ flex: 1, padding: 20 }}>
                    {children}
                </BottomSheetScrollView>
            </BottomSheet>
            <Text>Bottom of the layout</Text>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        flex: 1,
        backgroundColor: 'blue',
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 10,
        top: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    backButton: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    titleText: {
        fontSize: 20,
        marginLeft: 16,
        fontWeight: '600',
    },
});

export default RideLayout;
