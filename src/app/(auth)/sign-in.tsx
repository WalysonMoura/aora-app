import { CustomButton } from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className=" flex-1 bg-primary">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Faça login no Aora
          </Text>

          {/*    <FormField/> */}
          <CustomButton
           title="Entrar"
            containerStyles="mt-7"
            handlePress={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Não tem uma conta?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Inscrever-se
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default SignIn;
