import Button from '@/components/Button';
import { useLocalSearchParams, useRouter, useSegments } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Post() {
  const [tabs, segment] = useSegments();
  const router = useRouter();
  const params = useLocalSearchParams<{ randomId: string }>();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Post :)</Text>
        <Text style={styles.subtitle}>This is page render inside the stack of the tab</Text>
      </View>

      <Button
        onClick={() => {
          router.push({
            pathname: `/${tabs}/${segment}/post`,
            params: { randomId: Math.random().toString() },
          });
        }}
        title="Stack another post"
      />

      <Text>Random ID: {params.randomId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
