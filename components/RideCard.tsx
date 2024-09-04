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
}: { ride: Ride }) => (
    <View style={styles.cardContainer}>
        <View style={styles.innerContainer}>
            <View style={styles.contentContainer}>
                <Image
                    source={{
                        uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`
                    }}
                    style={styles.mapImage}
                />
            </View>
        </View>
        <Text style={styles.driverName}>{driver.first_name}</Text>
    </View>
);

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mapImage: {
        width: 200, 
        height: 133, 
        borderRadius: 8, 
    },
    driverName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default RideCard;
