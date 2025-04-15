import { StyleSheet, TouchableOpacity } from 'react-native';
import { SymbolView } from 'expo-symbols';

const ImageSearch = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SymbolView
        name="photo.badge.plus"
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
  },
});

export default ImageSearch;
