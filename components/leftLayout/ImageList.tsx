import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';

import EditButton from '@/components/EditButton';
import ImageDelete from '@/components/ImageDelete';
import ImageEdit from '@/components/ImageEdit';
import ImageSearch from '@/components/ImageSearch';
import { Colors } from '@/constants/Colors';
import { usePickImages } from '@/hooks/usePickImages';
import useImageStore from '@/services/store/imageStore';
import {
  startShakeAnimation,
  stopShakeAnimation,
} from '@/utils/shakeAnimation';

const ImageList = () => {
  const { imageLocation, removeImageLocation } = useImageStore();
  const { loading, pickImages } = usePickImages();
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const [isEditing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    if (isEditing) {
      startShakeAnimation(shakeAnim);
    } else {
      stopShakeAnimation(shakeAnim);
    }
  }, [isEditing]);

  const onSearch = async () => {
    setEditing(false);
    await pickImages();
  };

  const onEditImage = () => {
    setEditing(!isEditing);
  };

  const onRemove = (imageURL: string) => {
    removeImageLocation(imageURL);
  };

  useEffect(() => {}, [imageLocation]);

  const renderItem = ({ item }: { item: string }) => (
    <Animated.View
      style={[
        styles.imagesContainer,
        isEditing && {
          transform: [
            {
              rotate: shakeAnim.interpolate({
                inputRange: [-1, 1],
                outputRange: ['-1deg', '1deg'],
              }),
            },
          ],
        },
      ]}>
      {isEditing && (
        <View style={styles.deleteIcon}>
          <ImageDelete onPress={() => onRemove(item)} />
        </View>
      )}
      <Image style={styles.image} source={{ uri: `file://${item}` }} />
    </Animated.View>
  );

  return (
    <BlurView intensity={100} style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loadingStyle} size="large" />
      ) : (
        <FlatList
          contentContainerStyle={styles.containerListStyle}
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
              {imageLocation?.length > 0 && <EditButton onEdit={onEditImage} />}
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
    borderColor: Colors.dark.border,
    borderWidth: 0.5,
    borderRadius: 15,
    overflow: 'hidden',
    height: '45%',
    width: '100%',
    alignItems: 'center',
  },

  imagesContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imagesListContainer: {
    width: '100%',
  },
  containerListStyle: {
    paddingBottom: 60,
  },
  deleteIcon: {
    position: 'absolute',
    top: -20,
    right: -10,
    bottom: 0,
    zIndex: 50,
  },
  searchImageHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
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
