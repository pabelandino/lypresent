export interface VideoItem {
  videoPath: string;
  thumbnailPath: string;
}

export interface VideoStoreType {
  videoLocation: VideoItem[];
  setVideoLocation: (item: VideoItem) => void;
  removeVideoLocation: (videoPath: string) => void;
}
