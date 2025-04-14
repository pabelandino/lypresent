import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';

import DescriptionText from '@/components/DescriptionText';
import SearchInput from '@/components/SearchInput';
import TitleText from '@/components/TitleText';

const LyricList = () => {
  const mockData = [1, 2];
  const MockImageList = () => (
    <TouchableOpacity style={styles.imagesContainer}>
      <View>
        <View style={styles.lyricContainer}>
          <Image
            style={styles.image}
            source={require('@/assets/images/bg3.png')}
          />
          <BlurView style={styles.textContainer} intensity={100}>
            <View style={styles.textDetailContainer}>
              <TitleText color="white" />
              <DescriptionText color="white" />
            </View>
          </BlurView>
        </View>

        <View style={styles.lyricContainer}>
          <Image
            style={styles.image}
            source={require('@/assets/images/bg2.png')}
          />
          <BlurView style={styles.textContainer} intensity={100}>
            <View style={styles.textDetailContainer}>
              <TitleText color="white" />
              <DescriptionText color="white" />
            </View>
          </BlurView>
        </View>

        <View style={styles.lyricContainer}>
          <Image
            style={styles.image}
            source={require('@/assets/images/bg1.png')}
          />
          <BlurView style={styles.textContainer} intensity={100}>
            <View style={styles.textDetailContainer}>
              <TitleText color="white" />
              <DescriptionText color="white" />
            </View>
          </BlurView>
        </View>

        <View style={styles.lyricContainer}>
          <Image
            style={styles.image}
            source={require('@/assets/images/bg4.png')}
          />
          <BlurView style={styles.textContainer} intensity={100}>
            <View style={styles.textDetailContainer}>
              <TitleText color="white" />
              <DescriptionText color="white" />
            </View>
          </BlurView>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <BlurView intensity={100} style={styles.container}>
      <FlatList
        data={mockData}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <BlurView
            intensity={100}
            tint="dark"
            style={styles.searchImageHeader}>
            <SearchInput />
          </BlurView>
        }
        renderItem={MockImageList}
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    height: '90%',
  },
  imagesContainer: {
    padding: 3,
  },
  textContainer: {
    borderTopWidth: 1,
    borderTopColor: '#A4A4A4',
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    width: '95%',
    height: '50%',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textDetailContainer: {
    marginLeft: 5,
    gap: 2,
  },
  lyricContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  searchImageHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    resizeMode: 'cover',
    height: 110,
    width: 170,
    borderRadius: 20,
    margin: 5,
    boxShadow: '',
  },
  symbol: {
    width: 35,
    height: 35,
    margin: 5,
  },
});

export default LyricList;
