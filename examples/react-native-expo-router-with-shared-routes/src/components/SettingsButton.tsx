import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ImageComponent } from 'react-native';

interface ButtonProps {
  icon: string;
  title: string;
  subtitle: string;
  onPress: () => void;
}

const SettingsButton: React.FC<ButtonProps> = ({ icon, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}></View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    paddingBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default SettingsButton;
