import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { useImageCopy } from '@/hooks/useCopyImage';
import { useMediaLibraryPermissions } from '@/hooks/useMediaLibraryPermissions';
import useImageStore from '@/services/store/imageStore';

export const usePickImages = () => {
  const [loading, setLoading] = useState(false);
  const { setImageLocation } = useImageStore();
  const { requestPermission } = useMediaLibraryPermissions();
  const { copyToFolder } = useImageCopy();

  const pickImages = async () => {
    try {
      setLoading(true);

      const granted = await requestPermission();
      if (!granted) return;

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsMultipleSelection: true,
        selectionLimit: 3,
        quality: 1,
      });

      if (result.canceled || result.assets.length === 0) return;

      for (const asset of result.assets) {
        const copiedPath = await copyToFolder(
          asset.uri,
          asset.fileName as string,
        );
        if (!copiedPath) continue;
        setImageLocation(copiedPath);
      }
    } catch (error) {
      console.error('ImagePicker error:', error);
    } finally {
      setLoading(false);
    }
  };

  return { pickImages, loading };
};
