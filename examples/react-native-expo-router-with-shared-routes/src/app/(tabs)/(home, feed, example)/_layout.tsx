import { Stack } from 'expo-router';

export default function DynamicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    />
  );
}
