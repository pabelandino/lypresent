import { StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';

import { Colors } from '@/constants/Colors';

const TopActions = () => {
  return (
    <BlurView intensity={100} style={styles.container}>
      <TouchableOpacity>
        <SymbolView
          name="rectangle.on.rectangle.slash"
          tintColor={Colors.dark.icon}
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SymbolView
          name="video.slash.fill"
          tintColor={Colors.dark.icon}
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SymbolView
          name="text.page.slash"
          tintColor={Colors.dark.icon}
          style={styles.symbol}
          type="hierarchical"
        />
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.dark.border,
    padding: 5,
    borderWidth: 0.5,
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
