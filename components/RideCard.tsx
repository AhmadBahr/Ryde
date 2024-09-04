import { icons } from "@/constants";
import { Ride } from "@/types/type";
import { Text, View, StyleSheet, Image } from "react-native";

const RideCard = ({
    ride: {
        destination_longitude,
        destination_latitude,
        origin_address,
        destination_address,
        created_at,
        ride_time,
        driver,
        payment_status,
    }
}: { ride: Ride }) => {
    const rideDate = new Date(created_at);
    const formattedDate = rideDate.toLocaleDateString();
    const formattedTime = rideDate.toLocaleTimeString();

    return (
        <View style={styles.cardContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.contentContainer}>
                    <Image
                        source={{
                            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=300&height=200&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`
                        }}
                        style={styles.mapImage}
                    />
                    <View style={styles.textContainer}>
                        <View style={styles.row}>
                            <Image source={icons.to} style={styles.icon} />
                            <Text style={styles.text} numberOfLines={1}>{origin_address}</Text>
                        </View>
                        <View style={styles.row}>
                            <Image source={icons.point} style={styles.icon} />
                            <Text style={styles.text}>{destination_address}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.dateTimeContainer}>
                    <View style={styles.dateTimeRow}>
                        <Text style={styles.dateTimeText}>Date & Time</Text>
                        <Text style={styles.dateTimeText}>
                            {formattedDate} - {formattedTime} (Ride Time: {ride_time} minutes)
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#A3A3A3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 12,
    },
    innerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    mapImage: {
        width: 150,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
    },
    dateTimeContainer: {
        width: '100%',
        backgroundColor: '#38B2AC',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    dateTimeRow: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateTimeText: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#4A5568',
    },
});

export default RideCard;
