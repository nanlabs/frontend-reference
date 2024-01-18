import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const DetailsPage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: `Element #${id}` }} />
      <Text>Details page for element #{id}</Text>
    </View>
  );
};

export default DetailsPage;
