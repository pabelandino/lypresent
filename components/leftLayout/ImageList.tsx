import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { BlurView } from 'expo-blur';

import ImageSearch from '@/components/ImageSearch';
import { usePickImages } from '@/hooks/usePickImages';
import useImageStore from '@/services/store/imageStore';

const ImageList = () => {
  const { imageLocation } = useImageStore();
  const { loading, pickImages } = usePickImages();
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.imagesContainer}>
      <Image style={styles.image} source={{ uri: `file://${item}` }} />
    </TouchableOpacity>
  );

  const onSearch = async () => {
    await pickImages();
  };

  useEffect(() => {}, [imageLocation]);

  return (
    <BlurView intensity={100} style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loadingStyle} size="large" />
      ) : (
        <FlatList
          style={styles.imagesListContainer}
          data={imageLocation}
          keyExtractor={(item, index) => `${item}-${index}`}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <BlurView
              intensity={100}
              tint="dark"
              style={styles.searchImageHeader}>
              <ImageSearch onPress={onSearch} />
            </BlurView>
          }
          renderItem={renderItem}
        />
      )}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  loadingStyle: {
    alignSelf: 'center',
    marginTop: 40,
  },
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    height: '45%',
    width: '100%',
    alignItems: 'center',
  },
  imagesContainer: {
    alignSelf: 'center',
  },
  imagesListContainer: {
    width: '100%',
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
export default ImageList;
