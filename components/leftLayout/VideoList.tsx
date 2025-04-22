import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';

import EditButton from '@/components/EditButton';
import ImageDelete from '@/components/ImageDelete';
import VideoSearch from '@/components/VideoSearch';
import { Colors } from '@/constants/Colors';
import { usePickVideos } from '@/hooks/usePickVideos';
import useVideoStore from '@/services/store/videoStore';
import { VideoItem } from '@/services/store/videoStoreType';
import {
  startShakeAnimation,
  stopShakeAnimation,
} from '@/utils/shakeAnimation';

const VideoList = () => {
  const { videoLocation, removeVideoLocation } = useVideoStore();
  const { pickVideos, loading } = usePickVideos();

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
    await pickVideos();
  };

  const onEditVideo = () => {
    setEditing(!isEditing);
  };

  const onRemove = (videoURL: VideoItem) => {
    removeVideoLocation(videoURL);
  };

  useEffect(() => {}, [videoLocation]);

  const renderItem = ({ item }: { item: VideoItem }) => {
    return (
      <Animated.View
        style={[
          styles.videoContainer,
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
        <Image
          source={{ uri: `file://${item.thumbnailPath}` }}
          style={styles.video}
        />
        <SymbolView
          name="play.circle"
          tintColor="#fff"
          style={styles.symbol}
          type="hierarchical"
        />
      </Animated.View>
    );
  };

  return (
    <BlurView intensity={100} style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loadingStyle} size="large" />
      ) : (
        <FlatList
          style={styles.videoListContainer}
          contentContainerStyle={styles.videosContainer}
          data={videoLocation}
          keyExtractor={(item, index) => `${item}-${index}`}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <BlurView
              intensity={100}
              tint="dark"
              style={styles.searchVideoHeader}>
              <VideoSearch onPress={onSearch} />
              {videoLocation?.length > 0 && <EditButton onEdit={onEditVideo} />}
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
    marginBottom: 10,
    alignItems: 'center',
  },
  videoContainer: {
    alignSelf: 'center',
    marginTop: 12,
  },
  videosContainer: {
    paddingBottom: 70,
  },
  deleteIcon: {
    position: 'absolute',
    top: -20,
    right: -10,
    bottom: 0,
    zIndex: 50,
  },
  video: {
    height: 110,
    width: 170,
    borderRadius: 20,
    margin: 5,
  },
  symbol: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 30,
    left: 60,
  },
  videoListContainer: {
    width: '100%',
  },
  searchVideoHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
export default VideoList;
