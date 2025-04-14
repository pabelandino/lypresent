import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SymbolView } from 'expo-symbols';

const VideoSearch = () => {
  return (
    <TouchableOpacity>
      <SymbolView
        name="movieclapper"
        tintColor="#fff"
        style={styles.symbol}
        type="hierarchical"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  symbol: {
    width: 55,
    height: 55,
    margin: 5,
  },
});

export default VideoSearch;
