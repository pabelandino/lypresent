import { StyleSheet, Text, View } from 'react-native';

const TitleText = ({ color }: { color?: string }) => {
  const styles = StyleSheet.create({
    text: {
      fontWeight: 'bold',
      color,
    },
  });
  return (
    <View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        Hello, TitleText!
      </Text>
    </View>
  );
};

export default TitleText;
