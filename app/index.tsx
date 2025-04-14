import { SafeAreaView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ImageList from '@/components/leftLayout/ImageList';
import VideoList from '@/components/leftLayout/VideoList';

const index = () => {
  return (
    <LinearGradient
      colors={['#131a26', '#0e1726']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <SafeAreaView />
      <View className="items-center justify-betweent flex-row">
        <View style={styles.searchVideoImageContainer}>
          <ImageList />
          <VideoList />
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
  },
});

export default index;
