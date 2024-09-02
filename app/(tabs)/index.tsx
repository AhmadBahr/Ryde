import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="text-red-500 text-center">Uber clone</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
