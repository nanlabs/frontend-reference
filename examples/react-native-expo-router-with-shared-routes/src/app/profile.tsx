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

            <View style={styles.inputContainer}>
              <View>
                <Text>Name</Text>
                <TextInput style={styles.input} placeholder="Name" />
              </View>
              <View>
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder="Email" />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <Text style={styles.noTabs}>No tabs in this page. </Text>
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
  inputContainer: {
    width: '100%',
    padding: 10,
    gap: 10,
  },

  input: {
    width: '100%',
    marginVertical: 5,
    maxHeight: 80,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  noTabs: {
    width: '100%',
    textAlign: 'center',
  },
});
