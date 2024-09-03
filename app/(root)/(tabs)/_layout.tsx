import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

const TabIcon = ({ focused, source }: { source: ImageSourcePropType; focused: boolean }) => (
    <View style={[styles.tabIconContainer, focused && styles.tabIconContainerFocused]}>
        <View style={[styles.innerIconContainer, focused && styles.innerIconContainerFocused]}>
            <Image
                source={source}
                style={[styles.tabIconImage, focused && styles.tabIconImageFocused]}
            />
        </View>
    </View>
);

const Layout = () => {
    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#333333',
                    borderRadius: 50,
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 78,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    position: 'absolute', 
                }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />
                }}
            />
            <Tabs.Screen
                name="rides"
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '',
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
        backgroundColor: 'green',
    },
    innerIconContainer: {
        borderRadius: 9999,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    innerIconContainerFocused: {
        backgroundColor: 'blue',
    },
    tabIconImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: 'gray',
    },
    tabIconImageFocused: {
        tintColor: 'white',
    }
});

export default Layout;
