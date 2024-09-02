import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { useRef } from 'react';
import { onboarding } from '@/constants';

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => router.replace('/(auth)/sign-up')}
                style={styles.skipButton}
            >
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => (
                    <Text>
                        <View>{item.title}</View>
                    </Text>
                ))}
            </Swiper>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        position: 'relative',
    },
    skipButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    skipText: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Jakarta-bold',
    },
    dot: {
        width: 32,
        height: 4,
        backgroundColor: 'gray',
        marginHorizontal: 4,
        borderRadius: 2
    },
    activeDot: {
        width: 32,
        height: 4,
        backgroundColor: 'black',
        marginHorizontal: 4,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideText: {
        fontSize: 18,
        color: 'black',
    },
});

export default Onboarding;
