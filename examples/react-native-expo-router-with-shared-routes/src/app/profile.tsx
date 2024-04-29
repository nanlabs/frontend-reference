import { Stack } from 'expo-router';
import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EditProfile() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Edit Profile' }} />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
          <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
            <View style={styles.avatarContainer}>
              <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.avatar} />
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeText}>Change profile picture</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Email" />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flexGrow: 1,
    paddingBottom: 100,
    paddingHorizontal: 10,
  },

  avatarContainer: {
    height: 100,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: '38%',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    padding: 5,
  },
  changeButton: {
    marginTop: 10,
  },
  changeText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    marginVertical: 5,
    maxHeight: 80,
  },
  saveContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
  },
  saveButton: {
    width: '100%',
    marginVertical: 10,
  },
  error: {
    margin: 0,
    paddingVertical: 0,
  },
});
