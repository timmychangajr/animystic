import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { ThemedTabBar } from '@/components/ThemedTabBar';
import { AppColors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={props => <ThemedTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: AppColors.tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }} />
  );
}
