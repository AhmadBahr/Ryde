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

                <View style={styles.detailsContainer}>
                    <View style={styles.dateTimeRow}>
                        <Text style={styles.dateTimeLabel}>Date & Time</Text>
                        <Text style={styles.dateTimeValue}>
                            {formattedDate} - {formattedTime} (Ride Time: {ride_time} minutes)
                        </Text>
                    </View>
                    <View style={styles.driverContainer}>
                        <Text style={styles.driverLabel}>Driver</Text>
                        <Text style={styles.driverValue}>
                            {driver.first_name} {driver.last_name}
                        </Text>
                    </View>
                    <View style={styles.seatsContainer}>
                        <Text style={styles.seatsLabel}>Car Seats</Text>
                        <Text style={styles.seatsValue}>
                            {driver.car_seats}
                        </Text>
                    </View>
                    <View style={styles.paymentContainer}>
                        <Text style={styles.paymentLabel}>Payment Status</Text>
                        <Text style={styles.paymentValue}>
                            {payment_status}
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
        flexDirection: 'row',
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
        flexDirection: 'row',
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
    detailsContainer: {
        width: '100%',
        backgroundColor: '#F9FAFB',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    dateTimeRow: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    dateTimeLabel: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#4A5568',
        fontWeight: 'bold',
    },
    dateTimeValue: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#4A5568',
    },
    driverContainer: {
        marginBottom: 10,
    },
    driverLabel: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#2D3748',
        fontWeight: 'bold',
    },
    driverValue: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#2D3748',
    },
    seatsContainer: {
        marginBottom: 10,
    },
    seatsLabel: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#2D3748',
        fontWeight: 'bold',
    },
    seatsValue: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#2D3748',
    },
    paymentContainer: {
        marginBottom: 10,
    },
    paymentLabel: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#E53E3E',
        fontWeight: 'bold',
    },
    paymentValue: {
        fontSize: 14,
        fontFamily: 'Jakarta-Medium',
        color: '#E53E3E',
    },
});

export default RideCard;
