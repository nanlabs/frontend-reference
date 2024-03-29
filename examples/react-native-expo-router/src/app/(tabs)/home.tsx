import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '@/components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home :)</Text>
        <Text style={styles.subtitle}>This is the first page of this app.</Text>
      </View>
      <Link href="/login">Log in</Link>
      <Button />
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
