import { icons } from "@/constants";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

type SearchInputProps = {
  initialQuery?: string;
};

const SearchInput = ({ initialQuery }: SearchInputProps) => {
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholder="Pesquise por um tópico de vídeo"
        placeholderTextColor="#CDCDE0"
        value={query}
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
