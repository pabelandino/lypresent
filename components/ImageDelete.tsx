import { StyleSheet, TouchableOpacity } from 'react-native';
import { SymbolView } from 'expo-symbols';

const ImageDelete = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SymbolView
        name="minus.circle.fill"
        tintColor="#fff"
        style={styles.symbol}
        type="hierarchical"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  symbol: {
    width: 36,
    height: 36,
    margin: 5,
  },
});

export default ImageDelete;
