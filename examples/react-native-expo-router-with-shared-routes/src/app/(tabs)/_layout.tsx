import { Tabs } from 'expo-router/tabs';
import React from 'react';

const AppLayout = () => {
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: 'HOME',
        }}
      />
      <Tabs.Screen
        name="(feed)"
        options={{
          tabBarLabel: 'FEED',
        }}
      />
      <Tabs.Screen
        name="(example)"
        options={{
          tabBarLabel: 'EXAMPLE',
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
