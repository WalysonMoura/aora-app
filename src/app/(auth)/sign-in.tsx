import { images } from "@/constants";
import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View>
                    <Image source={images.logo} />
                    <Text className="text-slate-10h-full0 text-5xl">Faça login no Aora</Text>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#fff" barStyle="light-content" />
        </SafeAreaView>
    )

}

export default SignIn