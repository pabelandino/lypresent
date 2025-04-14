import { StyleSheet, TouchableOpacity } from 'react-native';
import { SymbolView } from 'expo-symbols';

const ImageSearch = () => {
  return (
    <TouchableOpacity>
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
    width: 55,
    height: 55,
    margin: 5,
  },
});

export default ImageSearch;
