import { Text, View } from "react-native";

type InfoBoxProps = {
  title: string | number;
  subtitle: string;
  containerStyles?: string;
  titleStyles?: string;
};

export const InfoBox = ({
  subtitle,
  title,
  containerStyles,
  titleStyles,
}: InfoBoxProps) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-sm text-gray-100 text-center font-pregular">
        {subtitle}
      </Text>
    </View>
  );
};
