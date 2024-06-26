import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { posts } from "./home";
import { VideoCard } from "@/components/VideoCard";
import { EmptyState } from "@/components/EmptyState";
import { InfoBox } from "@/components/InfoBox";

const Profile = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={posts}
          keyExtractor={({ $id }) => $id}
          renderItem={({ item }) => {
            <VideoCard
              title={item.title}
              thumbnail={item.thumbnail}
              video={item.video}
              creator={item.creator.username}
              avatar={item.creator.avatar}
            />;
          }}
          ListEmptyComponent={() => (
            <EmptyState
              title="Nenhum vídeo encontrado"
              subtitle="Nenhum vídeo encontrado para este perfil"
            />
          )}
          ListHeaderComponent={() => (
            <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
              <TouchableOpacity className="flex w-full items-end mb-10">
                <Image resizeMode="contain" className="w-6 h-6" />
              </TouchableOpacity>

              <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
                <Image
                  className="w-[90%] h-[90%] rounded-lg"
                  resizeMode="cover"
                />
              </View>

              <InfoBox
                title="Walyson"
                containerStyles="mt-5"
                titleStyles="text-lg"
              />

              <View className="mt-5 flex flex-row">
                <InfoBox
                  title={posts.length || 0}
                  subtitle="Posts"
                  titleStyles="text-xl"
                  containerStyles="mr-10"
                />
                <InfoBox
                  title="1.2k"
                  subtitle="Followers"
                  titleStyles="text-xl"
                />
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Profile;
