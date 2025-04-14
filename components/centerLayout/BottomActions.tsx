import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';

const BottomActions = () => {
  return (
    <BlurView intensity={100} style={styles.container}>
      <TouchableOpacity>
        <SymbolView
          name="info.circle"
          tintColor="#fff"
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SymbolView
          name="display.2"
          tintColor="#5AFF53"
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SymbolView
          name="gearshape"
          tintColor="#fff"
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    padding: 5,
    borderWidth: 1,
    borderRadius: 35,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  symbol: {
    width: 25,
    height: 25,
    margin: 5,
  },
});
export default BottomActions;
