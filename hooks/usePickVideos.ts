import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

interface Video {
  width?: number;
  height?: number;
  path?: string;
  filename?: string;
}
export const usePickVideos = () => {
  const [videoUrl, setVideoUrl] = useState<Video[] | null>(null);

  const pickVideos = () => {
    ImagePicker.openPicker({
      cropping: false,
      multiple: true,
      mediaType: 'video',
    })
      .then(videos => {
        setVideoUrl(videos);
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error);
      });
  };

  return { videoUrl, pickVideos };
};
