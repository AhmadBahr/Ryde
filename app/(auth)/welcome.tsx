import { router } from 'expo-router';
import React, { useState, useRef } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
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
                style={styles.swiper}
            >
                {onboarding.map((item, index) => (
                    <View key={index} style={styles.slide}>
                        <Image
                            source={item.image}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <View style={styles.titleContainer}>
                            <Text style={styles.slideText}>{item.title}</Text>
                        </View>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </View>
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
        zIndex: 1,
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
        borderRadius: 2,
    },
    activeDot: {
        width: 32,
        height: 4,
        backgroundColor: 'black',
        marginHorizontal: 4,
        borderRadius: 2,
    },
    swiper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    slideText: {
        fontSize: 40,
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    descriptionText: {
        fontSize: 16,
        fontFamily: 'Jakarta-SemiBold',
        textAlign: 'center',
        color: '#858585',
        marginHorizontal: 10,
        marginTop: 3,
    },
    image: {
        width: '100%',
        height: 300,
    },
});

export default Onboarding;
