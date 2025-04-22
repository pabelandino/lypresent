import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';

import { useMediaLibraryPermissions } from '@/hooks/useMediaLibraryPermissions';
import { useVideoCopy } from '@/hooks/useVideoCopy';
import useVideoStore from '@/services/store/videoStore';

export const usePickVideos = () => {
  const [loading, setLoading] = useState(false);
  const { setVideoLocation } = useVideoStore();
  const { requestPermission } = useMediaLibraryPermissions();
  const { copyToFolder } = useVideoCopy();

  const pickVideos = async () => {
    try {
      setLoading(true);

      const granted = await requestPermission();
      if (!granted) return;

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['videos'],
        allowsMultipleSelection: true,
        selectionLimit: 3,
      });

      if (result.canceled || result.assets.length === 0) return;

      for (const asset of result.assets) {
        const copiedPath = await copyToFolder(
          asset.uri,
          asset.fileName as string,
        );
        if (!copiedPath) continue;

        const thumbnail = await generateThumbnail(copiedPath);

        if (!thumbnail) continue;

        setVideoLocation({
          videoPath: copiedPath,
          thumbnailPath: thumbnail,
        });
      }
    } catch (error) {
      console.error('MediaLibrary video error:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateThumbnail = async (url: string) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(url, {
        time: 15000,
      });
      return uri;
    } catch (e) {
      console.warn(e);
    }
  };

  return { pickVideos, loading };
};
