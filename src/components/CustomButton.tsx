import {
  ActivityIndicator,
  ActivityIndicatorBase,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: any;
  textStyles?: any;
  isLoading?: boolean;
}

export const CustomButton = ({
  handlePress,
  isLoading,
  title,
  containerStyles,
  textStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`border-secondary flex min-h-[62px] flex-row items-center justify-center rounded-xl bg-secondary ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}>
      <Text className={`font-psemibold text-lg text-primary ${textStyles}`}>{title}</Text>

      {isLoading && (
        <ActivityIndicator animating={isLoading} color="#fff" size="small" className="ml-2 " />
      )}
    </TouchableOpacity>
  );
};
