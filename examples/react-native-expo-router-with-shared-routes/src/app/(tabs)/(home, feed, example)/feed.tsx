import Button from '@/components/Button';
import { router, useSegments } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Feed() {
  const [tabs, segment] = useSegments();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Feed :)</Text>
        <Text style={styles.subtitle}>This is another tab with another stack</Text>
      </View>
      <Button
        onClick={() => {
          router.push(`/${tabs}/${segment}/post`);
        }}
        title="Go to a shared route 'post' (inside tabs)"
      />
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
