import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

const TabIcon = ({ focused, source }: { source: ImageSourcePropType; focused: boolean }) => (
    <View style={[styles.tabIconContainer, focused && styles.tabIconContainerFocused]}>
        <View style={[styles.innerIconContainer, focused && styles.innerIconContainerFocused]} />
        <Image source={source} style={styles.tabIconImage} />
    </View>
);

const Layout = () => {
    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                tabBarActiveTintColor: "white",
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />
                }}
            />
            <Tabs.Screen
                name="rides"
                options={{
                    title: 'Rides',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    tabIconContainer: {
        flexDirection: 'row',     
        justifyContent: 'center',  
        alignItems: 'center',     
        borderRadius: 9999,       
    },
    tabIconContainerFocused: {
        backgroundColor: '#E5E7EB', 
    },
    innerIconContainer: {
        borderRadius: 9999,       
        width: 48,                
        height: 48,               
        justifyContent: 'center', 
        alignItems: 'center',     
    },
    innerIconContainerFocused: {
        backgroundColor: '#D1D5DB', 
    },
    tabIconImage: {
        width: 24,                 
        height: 24,                
    },
});

export default Layout;
