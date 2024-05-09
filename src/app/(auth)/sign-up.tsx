import { images } from "@/constants"
import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SignUp = () => {
    return (
        <SafeAreaView className="bg-primary flex-1">
            <ScrollView>
                <View>
                    <Image source={images.logo} />
                    <Text className="text-slate-100 text-5xl">Faça login no Aora</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default SignUp