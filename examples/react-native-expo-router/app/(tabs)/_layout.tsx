import { Tabs } from 'expo-router/tabs';
import React from 'react';

const AppLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          href: '/home',
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          href: '/profile',
          headerShown: true,
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
