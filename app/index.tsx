import { SafeAreaView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BottomActions from '@/components/centerLayout/BottomActions';
import LyricPresentation from '@/components/centerLayout/LyricPresentation';
import ScreenPreview from '@/components/centerLayout/ScreenPreview';
import TopActions from '@/components/centerLayout/TopActions';
import ImageList from '@/components/leftLayout/ImageList';
import VideoList from '@/components/leftLayout/VideoList';
import LyricList from '@/components/rightLayout/LyricList';

const index = () => {
  return (
    <LinearGradient
      colors={['#4B5264', '#1A1F35']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <SafeAreaView />
      <View className="items-center justify-betweent flex-row gap-4">
        <View style={styles.searchVideoImageContainer}>
          <ImageList />
          <VideoList />
        </View>
        <View style={styles.centerContainer}>
          <TopActions />
          <ScreenPreview />
          <LyricPresentation />
          <BottomActions />
        </View>
        <View style={styles.rightContainer}>
          <LyricList />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchVideoImageContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 4,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 4,
  },
});

export default index;
