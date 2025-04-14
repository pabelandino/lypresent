import { StyleSheet, Text, View } from 'react-native';

const DescriptionText = ({ color }: { color?: string }) => {
  const styles = StyleSheet.create({
    text: {
      color,
    },
  });
  return (
    <View>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>Hello, DescriptionText! small text description</Text>
    </View>
  );
};

export default DescriptionText;
