import Button from '@/components/Button';
import { Link, router, useSegments } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Example() {
  const [tabs, segment] = useSegments();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Example :)</Text>
        <Text style={styles.subtitle}>Another page</Text>
      </View>
      <Button
        onClick={() => {
          router.push(`/profile`);
        }}
        title="Go to page profile (outside tabs)"
      />
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
