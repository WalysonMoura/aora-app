import { icons } from "@/constants";
import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

type FormFieldProps = TextInputProps & {
  title: "Passwaord" | "";
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
};

const FormField = ({
  handleChangeText,
  placeholder,
  title,
  value,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#7B7B8B"
          secureTextEntry={title === "Passwaord" && !showPassword}
          {...props}
        />
        {title === "Passwaord" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
