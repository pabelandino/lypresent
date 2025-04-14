import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SymbolView} from 'expo-symbols';

const VideoSearch = () => {
  return (
      <TouchableOpacity>
          <SymbolView name="video.fill.badge.plus" tintColor="#fff"  style={styles.symbol} type="hierarchical" />
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    symbol: {
        width: 55,
        height: 55,
        margin: 5,
        transform: [{ scaleX: -1 }, { scaleY: 1 }],
    },
})

export default VideoSearch;
