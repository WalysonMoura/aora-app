import images from "@/constants/images";
import { Image, Text, View } from "react-native";
import { CustomButton } from "./CustomButton";
import { router } from "expo-router";

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

export const EmptyState = ({ subtitle, title }: EmptyStateProps) => {
  return (
    <View className="flex items-center justify-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="h-[216px] w-[270px]"
      />
      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>
      <Text className="mt-2 text-center font-psemibold text-xl text-white">
        {subtitle}
      </Text>

      <CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/(tabs)/home")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};
