import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { icons } from "@/constants";
import { formatTime } from "@/lib/utils";
import { DriverCardProps } from "@/types/type";

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
    return (
        <TouchableOpacity
            onPress={setSelected}
            style={[
                styles.container,
                { backgroundColor: selected === item.id ? '#d0d0d0' : '#ffffff' }
            ]}
        >
            <Image
                source={{ uri: item.profile_image_url }}
                style={styles.profileImage}
            />

            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.title}</Text>

                    <View style={styles.ratingContainer}>
                        <Image source={icons.star} style={styles.starIcon} />
                        <Text style={styles.ratingText}>4</Text>
                    </View>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.priceContainer}>
                        <Image source={icons.dollar} style={styles.dollarIcon} />
                        <Text style={styles.price}>${item.price}</Text>
                    </View>

                    <Text style={styles.separator}>|</Text>

                    <Text style={styles.time}>{formatTime(item.time!)}</Text>

                    <Text style={styles.separator}>|</Text>

                    <Text style={styles.seats}>{item.car_seats} seats</Text>
                </View>
            </View>

            <Image
                source={{ uri: item.car_image_url }}
                style={styles.carImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginVertical: 5,
    },
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Jakarta-Regular',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    starIcon: {
        width: 14,
        height: 14,
    },
    ratingText: {
        fontSize: 14,
        fontFamily: 'Jakarta-Regular',
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dollarIcon: {
        width: 16,
        height: 16,
    },
    price: {
        fontSize: 14,
        fontFamily: 'Jakarta-Regular',
        marginLeft: 2,
    },
    separator: {
        fontSize: 14,
        fontFamily: 'Jakarta-Regular',
        color: '#6a6a6a',
        marginHorizontal: 5,
    },
    time: {
        fontSize: 14,
        fontFamily: 'Jakarta-Regular',
        color: '#6a6a6a',
    },
    seats: {
        fontSize: 14,
        fontFamily: 'Jakarta-Regular',
        color: '#6a6a6a',
    },
    carImage: {
        width: 56,
        height: 56,
    },
});

export default DriverCard;
