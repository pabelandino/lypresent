import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

export const ImageStorage = new MMKV({
  id: 'image-storage',
});

export const VideoStorage = new MMKV({
  id: 'video-storage',
});

export const LyricStorage = new MMKV({
  id: 'lyric-storage',
});

export const zustandImageStorage: StateStorage = {
  setItem: (name, value) => {
    return ImageStorage.set(name, value);
  },
  getItem: name => {
    const value = ImageStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return ImageStorage.delete(name);
  },
};

export const zustandVideoStorage: StateStorage = {
  setItem: (name, value) => {
    return VideoStorage.set(name, value);
  },
  getItem: name => {
    const value = VideoStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return VideoStorage.delete(name);
  },
};

export const zustandLyricStorage: StateStorage = {
  setItem: (name, value) => {
    return LyricStorage.set(name, value);
  },
  getItem: name => {
    const value = LyricStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return LyricStorage.delete(name);
  },
};
