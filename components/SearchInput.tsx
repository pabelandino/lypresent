import { StyleSheet, Text, TextInput, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';
import {Colors} from '@/constants/Colors';

const SearchInput = () => {
  return (
    <BlurView intensity={100} tint="dark" style={styles.searchImageHeader}>
      <View style={styles.searchContainer}>
        <SymbolView
          name="magnifyingglass"
          tintColor={Colors.dark.icon}
          style={styles.symbol}
          type="hierarchical"
        />
        <TextInput
          style={styles.inputSearch}
          placeholderTextColor={Colors.dark.placeholderText}
          placeholder="Search lyrics"
        />
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#09121D',
    flexDirection: 'row',
    padding: 2,
    borderRadius: 20,
    width: '100%',
  },
  inputSearch: {
    padding: 2,
    flex: 1,
    color: 'white',
  },
  searchImageHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 15,
  },
  symbol: {
    width: 20,
    height: 20,
    margin: 5,
  },
});
export default SearchInput;
