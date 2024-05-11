import { Post } from "@/@types/post";
import { icons } from "@/constants";
import { Video } from "expo-av";
import { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";

import * as Animatable from "react-native-animatable";

type TrendingItemProps = {
  activeItem: boolean;
  post: Post;
};

const TrendingItem = ({ activeItem, post }: TrendingItemProps) => {
  const [play, setPlay] = useState(true);

  return (
    <Animatable.View className="mr-5" duration={500}>
      {play ? (
        <Video
          source={{ uri: post.video }}
          className="w-52 h-72 mt-3 bg-white/10 rounded-[33px]"
        />
      ) : (
        <TouchableOpacity
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          {/*   <ImageBackground source={{uri: post.thumbnail}} /> */}
          <Image
            source={icons.play}
            resizeMode="cover"
            className="w-12 h-12 absolute"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

type TrendingProps = {
  posts: Post[];
};

const Trending = ({ posts }: TrendingProps) => {
  const [activeItem, setActiveItem] = useState(posts[0] ? true : false);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      horizontal
      renderItem={({ item }) => (
        <TrendingItem post={item} activeItem={activeItem} />
      )}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      
    />
  );
};

export default Trending;
