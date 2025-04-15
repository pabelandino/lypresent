import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { SymbolView } from 'expo-symbols';

import VideoSearch from '@/components/VideoSearch';
import { usePickVideos } from '@/hooks/usePickVideos';
import useVideoStore from '@/services/store/videoStore';
import { VideoItem } from '@/services/store/videoStoreType';

const VideoList = () => {
  const { videoLocation } = useVideoStore();
  const { pickVideos, loading } = usePickVideos();

  const onSearch = async () => {
    await pickVideos();
  };

  const renderItem = ({ item }: { item: VideoItem }) => {
    return (
      <TouchableOpacity style={styles.videoContainer}>
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
      </TouchableOpacity>
    );
  };
  useEffect(() => {}, [videoLocation]);
  return (
    <BlurView intensity={100} style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loadingStyle} size="large" />
      ) : (
        <FlatList
          style={styles.videoListContainer}
          data={videoLocation}
          keyExtractor={(item, index) => `${item}-${index}`}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <BlurView
              intensity={100}
              tint="dark"
              style={styles.searchImageHeader}>
              <VideoSearch onPress={onSearch} />
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
    marginBottom: 10,
    alignItems: 'center',
  },
  videoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    height: 110,
    width: 170,
    borderRadius: 20,
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
  searchImageHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
export default VideoList;
