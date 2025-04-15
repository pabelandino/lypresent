import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

const VideoSearch = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SymbolView
        name="video.badge.plus"
        tintColor="#fff"
        style={styles.symbol}
        type="hierarchical"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  symbol: {
    width: 45,
    height: 45,
    margin: 5,
    transform: [{ scaleX: -1 }],
  },
});

export default VideoSearch;
