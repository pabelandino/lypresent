import { StyleSheet, TouchableOpacity } from 'react-native';
import { SymbolView } from 'expo-symbols';

const ImageEdit = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SymbolView
        name="square.and.pencil"
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

export default ImageEdit;
