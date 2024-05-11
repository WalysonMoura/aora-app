import { useState } from "react";
import { View } from "react-native";

interface VideoCardProps {
  title: string;
  creator: string;
  avatar: string;
  thumbnail: string;
  video: string;
}

export const VideoCard = ({
  title,
  creator,
  avatar,
  thumbnail,
  video,
}: VideoCardProps) => {
  const [play, setPlay] = useState(false);
  return (
    <View>
      <View></View>
    </View>
  );
};
