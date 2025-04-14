import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';

const TopActions = () => {
  return (
    <BlurView intensity={100} style={styles.container}>
      <TouchableOpacity>
        <SymbolView
          name="rectangle.on.rectangle.slash"
          tintColor="#fff"
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SymbolView
          name="video.slash.fill"
          tintColor="#fff"
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SymbolView
          name="text.page.slash"
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
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  symbol: {
    width: 25,
    height: 25,
    margin: 5,
  },
});
export default TopActions;
