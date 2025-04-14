import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

import VideoSearch from '@/components/VideoSearch';

const VideoList = () => {
  const mockData = [1, 2];
  const MockImageList = () => (
    <TouchableOpacity style={styles.imagesContainer}>
      <Image style={styles.image} source={require('@/assets/images/bg1.png')} />
      <Image style={styles.image} source={require('@/assets/images/bg3.png')} />
      <Image style={styles.image} source={require('@/assets/images/bg2.png')} />
      <Image style={styles.image} source={require('@/assets/images/bg4.png')} />
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
            <VideoSearch />
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
    height: '45%',
    marginBottom: 10,
  },
  imagesContainer: {
    padding: 3,
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
});
export default VideoList;
